//CAPA DE ENRUTAMIENTO
// * SE VA A ENCARGAR DE QUE LOS REQUERIMIENTOS SEAN LOS CORRECTOS Y VA A ELABORAR LA RESPUESTA A ENVIAR AL CLIENTE.
//* ACA SE MANEJA REQ Y RES
import MyRouter from "../router.js";
import CartsController from "../../controllers/carts.controller.js"

import passport from "passport";
const cartsController = new CartsController()

export default class CartsRouter extends MyRouter {
    init() {
        this.create("/", passport.authenticate("jwt"), async (req, res, next) => {
            try {
                let user = req.user;
                let data = req.body;
                data.user_id = user._id;
                let response = await cartsController.createController(data)
                return res.sendSuccessCreate(response); 
            } catch (error) {
                next(error);
            }
        });
        this.read("/", passport.authenticate("jwt"), async(req,res,next) => {
            try {
                let user_id = req.user._id;
                let state = "pending" //Por default state="pending";
                if (req.query.state) {
                    state = req.query.state;
                }
                let response = await cartsController.filgerController(user_id,state);
                if (response) {
                    return res.sendSuccess(response);
                } else {
                    return res.sendNotFound();
                }
            } catch (error) {
                next(error);
            }
        });
    }
}