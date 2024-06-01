import BaseController from './BaseController';


class HelpRequest extends BaseController {
    constructor(service){
        super(service);
    }

    async getAll(req, res, next) {
        try {
            const response = await this.servise.getAll(req.query);
            if (res.statusCode === 200) {
                return res.status(200).json(response);
            }
            throw new Error("There is no data for this request");
        } catch (e) {
            next(e);
        }
    }
}