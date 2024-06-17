import connect from '../../config/DB.js';
import model from '../models/HelpRequestModel.js';


class HelpRequestRepo {

    constructor(model) {
        this.model = model;
        connect();
    }
    // async getAll() {
    //     try {
    //       const results = await this.model.aggregate([
    //         { $match: { status: "W" } }
    //       ]).exec();
    //       return results;
    //     } catch (error) {
    //       console.error('Error fetching data:', error);
    //       throw error;
    //     }
    //   }
    async getAll() {
        try {
          const results = await this.model.aggregate([
            { $match: { status: "W" } }
          ]).exec();
          return results;
        } catch (error) {
          console.error('Error fetching data:', error);
          throw error;
        }
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
    async update(id, item) {
        
    }

}

export default new HelpRequestRepo(model);