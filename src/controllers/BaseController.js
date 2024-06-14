import autoBind from 'autoBind';

class BaseController {
    constructor(servise) {
        this.servise = servise;
        autoBind(this);
    }
    async getAll(req, res, next) {
        try {
            const response = await this.servise.getAll(req.query);
            if (res.statusCode === 200) {// גיטי טוענת שצריך להריד את ה if
                return res.status(200).json(response);
            }
            throw new Error("There is no data for this request");
        } catch (e) {
            next(e);
        }
    }
    async getById(req, res, next) {
        const { id } = req.params;
        try {
            const response = await this.servise.getById(id);
            if (res.statusCode === 200) {
                return res.status(200).json(response);
            }
            throw new Error("There is no data for this request");
        }
        catch (e) {
            next(e);
        }
    }
    
    
   
}
export default BaseController;