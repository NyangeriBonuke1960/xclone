const UserRepository = require('../repositories/userRepository');
const User = require('../Entities/User');
const bcrypt = require('bcrypt');

class UserUsecase{
    async createUser({username, email, password}){
        try{
            if(!username || !email || !password){
                return { error: 'All fields are required' };
            }

            const userExists = await UserRepository.emailExists(email);
            if(userExists === true){
                return { error: 'Email already in use' };
            }

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const userData = {
                username,
                email,
                password: hashedPassword
            }

            const user = new User(userData);    

            const newUser = await UserRepository.postUser(user);

            await UserRepository.createUserMetadata(newUser._id);

            return newUser;
        }
        catch(error){
            return { error: error.message }
        }
    }
}

module.exports = new UserUsecase();