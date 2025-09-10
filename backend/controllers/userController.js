const UserUsecase = require('../usecases/userUsecase');

class UserController{
    async createUser(req, res){
        try{
            const { username, email, password } = req.body; 
            console.log(req.body);
            const result = await UserUsecase.createUser({ username, email, password});
            res.status(201).json(result);
        }
        catch(error){
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserController();