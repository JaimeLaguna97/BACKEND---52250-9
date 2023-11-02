//CAPA PERSISTENCIA
// * ES LA ENCARGADA DE REALIZAR EL CRUD

import Toy from '../models/toy.models.js';

export default class ToyMongo {
    constructor () {}
    async createModel(data) {
        let one = await Toy.create(data);
        return {
            message: 'toy created!',
            response: { "toy_id": one._id }
        }
    }
    async readModels() {
        let all = await Toy.find()
        if (all.length>0) {
            return {
                message: 'toys found!',
                response: { toys: all }
            }
        } else {
            return null
        }
    }
    async readOneModel(id) {
        let one = await Toy.findById(id);
        //let one = await Toy.findOne( _id: id ) //*ESTE METODO ES MAS AMPLIO QUE EL FIND BY ID
        if (one) {
            return {
                message: 'toy found!',
                response: one
            }
        } else {
            return null
        }
    }
    async updateModel (id,data) {
        //id del modelo a modificar
        //data lo que tengo que modificar
        //let one = await Toy.findByIdAndUpdate(id,data); //*DEVUELVE EL OBJETO ANTES DE LA MODIFICACION.
        let one = await Toy.findByIdAndUpdate(id,data, { new:true });
        if (one) {
            return {
                message: 'toy updated!',
                response: one
            }
        } else {
            return null
        }
    }
    async destroyModel (id) {
        let one = await Toy.findByIdAndDelete(id)
        if (one) {
            return {
                message: 'toy updated!',
                response: one
            }
        } else {
            return null
        }
    }
}