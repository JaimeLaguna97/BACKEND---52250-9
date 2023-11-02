//CAPA DE ENRUTAMIENTO
// * SE VA A ENCARGAR DE QUE LOS REQUERIMIENTOS SEAN LOS CORRECTOS Y VA A ELABORAR LA RESPUESTA A ENVIAR AL CLIENTE.
//* ACA SE MANEJA REQ Y RES

import MyRouter from "../router.js";
import UsersController from "../../controllers/users.controllers.js";

import passport from "passport";

let usersController = new UsersController();

export default class AuthRouter extends MyRouter {
    init() {
        this.create("/signin", async (req, res, next) => {
            try {
                let newUser = await usersController.createUser(req, res, next);
                res.send(newUser);
            } catch (error) {
                next(error);
            }
        });
        this. read("/user/:email", passport.authenticate("jwt"), async (req, res, next) => {
            try {
                await usersController.updateUserByEmail(req, res, next);
            } catch (error) {
                next(error);
            }
        });
        this.delete("/user/email", passport.authenticate("jwt"), async(req, res, next) => {
            try {
                await usersController.deleteUserByEmail(req, res, next);
            } catch (error) {
                next(error)
            }
        });
    }
}