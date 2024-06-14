import BaseController from "./BaseController";

class VolunteersController extends BaseController {
constructor(servise){
    super(servise);
}

    
    async insert(req, res, next) {
        try {
            const response = await this.servise.insert(req.body);
            return res.status(response.statusCode).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
export default new VolunteersController(services);