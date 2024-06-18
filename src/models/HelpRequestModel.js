import mongoose from "mongoose";
const Schema = mongoose.Schema;

const helpRequestSchema = new Schema({
    _id:Number,
    location: String,
    description: String,
    contactNumber: String,
    status: String,
    people: Number,
    importance: String,
    volunteerId: String
});
const helpRequestModel = mongoose.model('helpRequests', helpRequestSchema, 'helpRequest');
export default helpRequestModel;