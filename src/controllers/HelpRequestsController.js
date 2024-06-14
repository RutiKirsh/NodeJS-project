import BaseController from './BaseController';
import service from '../services/HelpRequestService';


class HelpRequestController extends BaseController {
    constructor(service){
        super(service);
    }
    async update(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.service.update(id, req.body);
            return res.status(200).json(response);
        }
        catch (e) {
            next(e);
        }
    }
}
//add update
export default new HelpRequestController(service);