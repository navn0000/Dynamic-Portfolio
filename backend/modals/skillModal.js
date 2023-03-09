const mongoose = require('mongoose');

const  Schema = mongoose.Schema;

let skillSet = new Schema({
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
)
// const skillSchema = mongoose.Schema({
//     name:{
//         type: String,
//         required: [true, "please add the skill name"]
//     },
//     expereince:{
//         type: String,
//         required: [true, "please add the experience name"]
//     },
//     description:{
//         type: String,
//         required: [true, "please add the descriotion name"]
//     }
// }, 
// {
//     timestamps: true,
// }
// );
const modal = mongoose.model("Skill", skillSet);
module.exports = modal;