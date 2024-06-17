import helpReq from '../models/HelpRequestModel.js';
const getReq = async (filters)=>{
    let query = {};
    if(filters.location){
        query.location = filters.location;
    }
    if(filters.status){
        query.status = filters.status;
    }
    if(filters.priority){
        query.priority = filters.priority;
    }
    return await helpReq.find(query).exec();
}
export default getReq;