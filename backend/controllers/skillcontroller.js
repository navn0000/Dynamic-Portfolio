const asyncHandler = require("express-async-handler");
const Skills = require('../modals/skillModal');


const getSkills = asyncHandler(async(req, res)=>{
    const skills =  await Skills.find();
    res.status(200).json({message: 'Get all Skills', skills})
});

const createSkills = asyncHandler(async (req, res)=>{
    console.log("The body is", req.body);
    const {name} = req.body;
    if(!name){
        res.status(400);
        throw new Error('All fields are mandatory');
    }

    const skillview = await Skills.create({
        name: req.body.name,
        experience: req.body.experience,
        description: req.body.description,
        user_id: req.user.id,
    });
    res.status(201).json(skillview);
});

const updateSkills = asyncHandler(async(req, res)=>{
    const skillView = await Skills.findById(req.params.id);
    if(!skillView){
        res.status(404);
        throw new Error("cannot found")
    }

    const updatedSkillSet = await Skills.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
        );
    res.status(200).json({message: `updates the skills for ${req.params.id}`, updatedSkillSet})
});

const findoneSkills = asyncHandler(async(req, res)=>{
    const skillView = await Skills.findById(req.params.id);
    if(!skillView){
        res.status(404);
        throw new Error("cannot fount    ")
    }

    res.status(200).json({message: `Detailed skills for ${req.params.id}`, skillView})
});

const deleteSkills = asyncHandler(async (req, res)=>{
    const skillView = await Skills.findById(req.params.id);
    if(!skillView){
        res.status(404);
        throw new Error("cannot found")
    }
    await Skills.remove();
    res.status(200).json(skillView)
});

module.exports = {getSkills, createSkills, updateSkills, findoneSkills, deleteSkills}