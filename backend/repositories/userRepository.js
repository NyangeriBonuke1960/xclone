const User = require('../models/userSchema');

class UserRepository{
    async postUser(userData){
        try{
            const user = new User(userData);
            return await user.save();
        }
        catch(error){
            return { error: error.message };
        }
    }

    async emailExists(email){
        try{
            const user = await User.findOne({email});
            return user ? true : false;
        }
        catch(error){
            return { error: error.message}
        }
    }
}

module.exports = new UserRepository();