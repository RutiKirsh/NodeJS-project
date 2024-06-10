import mongoose from 'mongoose';

mongoose.set("strictQuery", false);

export default async function connect(){
    try{
        await mongoose.connect('mongodb+srv://RutiAvigail:a&rnodeserver@nodeproject.sobuvek.mongodb.net/')
    }
    catch(err){
        console.log(err);
    }
    //לא הבנו
    // const db = mongoose.connection();
    // db.on('error', console.error.bind(console, 'connection error:'));
    // db.once('open', function() {
    //     console.log('Connected to DB');
    // });
}
