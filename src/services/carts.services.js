//CAPA DE SERVICIOS
//brindar servicios segun la persistencia
//HOY DIA ES UN INTERMEDIARIO (ENTRE PERSISTENCIA Y CONTROL)
import CartMongo from "../db/mongo/carts.mongo.js";

export default class CartsService {
    constructor() {
        this.model = new CartMongo()
    }
    createService(data) {
        let response = this.model.createModel(data)
        return response;
    }
    filterService(user_id,state) {
        let response = this.model.filterModels(user_id, state);
        return response;
    }
}