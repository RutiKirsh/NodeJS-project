import BaseController from "./BaseController";

class VolunteersController extends BaseController {
constructor(servise){
    super(servise);
}

    async update(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.update(id, req.body);
            return res.status(response.statusCode).json(response);
        }
        catch (e) {
            next(e);
        }
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