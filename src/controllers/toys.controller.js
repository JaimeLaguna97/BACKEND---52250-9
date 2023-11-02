//CAPA CONTROLADORA
// * ES LA ENCARGADA DE DIRIGIRME HACIA EL SERVICIO QUE CORRESPONDA
import ToysService from "../services/toys.service.js";

export default class ToysController {
    constructor () {
        //Tiene que construir una instancia de los servicios del modelo.
        this.service = new ToysService()
    }
    createController(data){
        let response = this.service.createService(data)
        return response
    }
    readController () {
        let response = this.service.readService()
        return response
    }
    readOneController(id) {
        let response = this.service.readOneService(id)
        return response
    }
    updateController(id,data) {
        let response = this.service.updateService(id,data)
        return response
    }
    destroyController(id) {
        let response = this.service.destroyService(id)
        return response
    }
}