//CAPA DE SERVICIOS
// * BRINDAR SERVICIOS SEGUN LA PERSISTENCIA
// * HOY DIA ES UN INTERMEDIARIO (ENTRE PERSISTENCIA Y CONTROL)
import ToyMongo from "../db/mongo/toys.mongo.js";

export default class ToysService {
    constructor () {
        //tiene que construir una instancia del modelo a la cual le tienen que configurar los diferentes serviciso para el crud.
        this.model = new ToyMongo()
    }
    createService(data) {
        let response = this.model.createModel(data)
        return response
    }
    readService() {
        let response = this.model.readModels()
        return response
    }
    readOneService(id) {
        let response = this.model.readOneModel(id)
        return response
    }
    updateService(id,data) {
        let response = this.model.updateModel(id,data)
        return response
    }
    destroyService(id) {
        let response = this.model.destroyModel(id)
        return response
    }
}
