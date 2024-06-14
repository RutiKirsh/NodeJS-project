import connect from '../../config/DB.js';
class BaseRepo {
    constructor(model) {
        this.model = model;
        connect();
    }
    
    async getAll(query) {
        return this.model.find({}).exec();
    }
    async getById(id){
        try{
            let item = await this.model.findById(id);
            if(!item){
                let error = new Error('There is no data for this request');
                error.code = 404;
                throw error;
        }
        return item;
    }
    catch(errors){
        throw(errors);
    }
}
async insert(data) {
    try {
        let item = await this.model.create(data);
        if (item) {
            return item;
        } else {
            throw new Error('Something wrong happened');
        }
    } catch (error) {
        throw error;
    }
}

async update(id, data) {
    try {
        let item = await this.model.findByIdAndUpdate(id, data, { new: true });
        return item;
    } catch (errors) {
        throw errors;
    }
}

}


export default BaseRepo; 