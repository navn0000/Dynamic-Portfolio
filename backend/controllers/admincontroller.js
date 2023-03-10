const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../modals/adminModal');

const registeradmin = asyncHandler(async (req, res) =>{
    const {adminname, email, password} = req.body;
    if(!adminname || !email || !password){
        res.status(400);
        throw new Error("All the fields are required")
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }
        const hashedPassword = await bcrypt.hash(password, 10)
        console.log(hashedPassword, "hased")
        const user = await User.create({
            adminname,
            email,
            password: hashedPassword,
        });
        console.log("user created", user);
        if(user){
            res.status(201).json({_id: user.id, email: user.email});
        } else {
            res.status(400);
            throw new Error("unableto");
        }


})

const loginadmin = asyncHandler(async (req, res) =>{
    const {email, password} = req.body;
    if(!email || !password){
        res.status(400);
        throw new Error("All fileds are mandatory");
    }
    const user = await User.findOne({ email });
    //compare password
    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
            {
            user:{
                adminname: user.adminname,
                email: user.email,
                id: user.id,
            },
        }, 
        process.env.ACCESS_TOKEN_SECERT,
        { expiresIn: "60m"}
        );
        res.status(200).json({ accessToken});
    } else {
        res.status(401);
       throw new Error("email or password is not valid")
    }
})

const currentadmin = asyncHandler(async (req, res) =>{
    res.json(req.user)
})




module.exports = {registeradmin, loginadmin, currentadmin}