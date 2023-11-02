import MyRouter from "./router.js";
import ToysRouter from "./api/toys.router.js";
import CartsRouter from "./api/carts.router.js";

const toys = new ToysRouter()
const carts = new CartsRouter()

export default class IndexRouter extends MyRouter {
  init() {
    this.read('/',(req,res)=>res.status(200).send('TOY STORE API'));
    this.use('/toys', toys.getRouter());
    this.use('/carts', carts.getRouter())
  }
}