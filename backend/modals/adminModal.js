const mongoose = require("mongoose");
const  Schema = mongoose.Schema;

let admin = new Schema({
    adminname: {
        type: String,
    },
    email:  {
        type: String,
    },
    password:  {
        type: String,
    },
},
{
    timestamps: true, 
},
);

module.exports = mongoose.model('admin', admin);