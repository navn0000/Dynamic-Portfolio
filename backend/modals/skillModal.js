const mongoose = require('mongoose');

const  Schema = mongoose.Schema;

let skillSet = new Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "user"
    },
    name: {
        type: String,
    },
    experience:  {
        type: String,
    },
    description:  {
        type: String,
    },
},
{
    timestamps: true,
}
);
const modal = mongoose.model("Skill", skillSet);
module.exports = modal;