import { burgersService } from "../services/BurgersService";
import BaseController from "../utils/BaseController";








//NOTE This class needs to be the same name as the file EXACTLY
export class BurgersController extends BaseController {
  constructor() {
    // SUPER SETS THE URL TAIL
    super("api/burgers")

    //ROUTER, GET, POST, PUT, and DELETE don't change (NON_BANANA)
    this.router
      .get("", this.getAll)
      .get("/:id", this.getOne)
      .post("", this.create)
      .delete("/:id", this.delete)
  }








  async getAll(_, res, next) {
    try {
      const values = await burgersService.find()
      return res.send(values);
    } catch (error) {
      next(error);
    }
  }









  async getOne(req, res, next) {
    try {
      const values = await burgersService.findById(req.params.id)
      return res.send(values);
    } catch (error) {
      next(error);
    }
  }










  async create(req, res, next) {
    try {
      // send req.body where the data exists to the service
      let data = await burgersService.create(req.body)
      res.send(data);
    } catch (error) {
      next(error);
    }
  }










  async delete(req, res, next) {
    try {
      let data = await burgersService.delete(req.params.id)
      res.send("<h1>Delorted!</h1>")
    } catch (error) {
      next(error)
    }
  }
}
