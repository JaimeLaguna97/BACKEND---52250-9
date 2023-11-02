import AuthMongo from "../db/mongo/users.mongo.js";

export default class AuthService {
    constructor(){
        this.authMongo = new AuthMongo();
    }

    async createUer(data) {
        try {
            const newUser = await this.authMongo.register(data);
            return newUser;
        } catch (error) {
            next(error);
        }
    }
    async findUserByEmail(email) {
        try {
            const user = await this.authMongo.readOne(email);
            return user;
        } catch (error) {
            next(error)
        }
    }
    async findUserById(id) {
        try {
            const user = await this.authMongo.readById(id);
            return user;
        } catch (error) {
            next(error);
        }
    }
    async updateUserByEmail(email,data) {
        try {
            const updatedUser = await this.authMongo.updateOne(email, data);
            return updatedUser;
        } catch (error) {
            next(error)
        }
    }
    async deleteUserByEmail(email) {
        try {
            const deletedUser = await this.authMongo.destroyOne(email);
            return deletedUser;
        } catch (error) {
            next(error);
        }
    }
}