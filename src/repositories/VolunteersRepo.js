import connect from '../../config/DB.js';

class VolunteersRepo {
    constructor(model) {
        this.model = model;
        connect();

    }
    async getAll() {
        return this.model.find({}).exec();
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
    async add(item) {
        try{
            let vol = await this.model.insert(item);
            if(vol){
                console.log(vol);
                return vol;
            }
            else{
                throw new Error('there is no data for this request');
            }
        }
        catch (errors) {
            throw (errors);
        }

    }
    async update(id, item) {
        
    }


}
export default new VolunteersRepo(model);