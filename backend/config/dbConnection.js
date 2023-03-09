const mongoose = require('mongoose');
const connectDb = async()=>{
    try{
        const connect = await mongoose.connect('mongodb+srv://naveenkumarbndar:tech123@cluster0.36yygdl.mongodb.net/test', {
            useNewUrlParser: "true",
            useUnifiedTopology: "true"});
        console.log("DB is connected", 
        connect.connection.host,
         connect.connection.name);

    } catch (err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb