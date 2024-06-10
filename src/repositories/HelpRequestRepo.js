import connect from '../../config/DB.js';


class HelpRequestRepo {

    constructor(mode) {
        this.model = model;
        connect();
    }
    async getAll() {
        return this.model.find({ status: 'W' }).exec();

    }
    async getById(id) {
        try {
            let item = await this.model.findById(id);
            if (!item) {
                let error = new Error('There is no data for this request');
                error.code = 404;
                throw error;
            }
            return item;
        }
        catch (errors) {
            throw (errors);
        }
    }
}

export default new HelpRequestRepo(model);