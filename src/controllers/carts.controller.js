//CAPA CONTROLADORA
// * ES LA ENCARGADA DE DIRIGIRME HACIA EL SERVICIO QUE CORRESPONDA
import CartsService from "../services/carts.services.js";

export default class CartsController {
    constructor() {
        this.service = new CartsService()
    }
    createController(data) {
        let response = this.service.createService(data);
        return response;
    }
    filterController(user_id,state) {
        let response = this.service.filterService(user_id,state);
        return response;
    }
}