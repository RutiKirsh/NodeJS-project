import mongoose from "mongoose";
const Schema = mongoose.Schema;

const volunteersSchema = new Schema({
    _id:String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    areasOfHelp: Array  
});
const volunteersModel = mongoose.model('volunteers', volunteersSchema);
export default volunteersModel;