import AuthService from "../services/users.services.js";

export default class UsersController {
    constructor() {
        this.service = new AuthService();
    }
    async createUser(req, res, next) {
        try {
            let userData = req.body;
            let newUser = await this.usersService.createUser(userData);
            res.send(newUser);
        } catch (error) {
            next(error);
        }
    };
    async getUserByEmail(req, res, next) {
        try {
            let { email } = req.params;
            let user = await this.usersService.findUserByEmail(email);
            if(user) {
                res.send(user);
            } else {
                res.send( { message: "User not found" });
            }
        } catch (error) {
            next(error);
        }
    };
    async getUserById( req, res, next) {
        try {
            let { userId } = req.params;
            const user = await this.usersService.findUserById(userId);
            if (user) {
                res.send(user);
            } else {
                res.send ( { message: "User not found "});
            }
        } catch (error) {
            next(error);
        }
    };
    async updateUserByEmail(req, res, next) {
        try {
            let { email } = req.params;
            let userData = req.body;
            let updatedUser = await this.usersService.updateUserByEmail(email, userData);
            if (updatedUser) {
                res.send(updatedUser);
            } else {
                res.send( { message: "User not found or couldn't be updated" });
            }
        } catch (error) {
            next(error)
        }
    };
    async deleteUserByEmail(req, res, next) {
        try {
            let { email } = req.params;
            let deletedUser = await this.usersService.deleteUsersByEmail(email);
            if (deletedUser) {
                res.send(deletedUser);
            } else {
                res.send ( { message: "User not found or couldn't be deleted"});
            }
        } catch (error) {
            next(error)
        }
    };
}