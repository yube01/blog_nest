const User = require('../model/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
var dotenv = require('dotenv').config()

const createUser = async(req,res)=>{


    const { name, email, password,image } = req.body;

    const userExist = await User.find({email})


    if(userExist.length > 0){
        return res.status(404).json("This email is already used ")
    } 

    const hashedPwd = await bcrypt.hash(password, 10) // salt rounds

    const userObject = { name, email,"password": hashedPwd,image}

    // Create and store new user 
    const user = await User.create(userObject)

    if (user) { //created 
        res.status(201).json({ message: `New user ${name} created` })
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }

}

const login = async(req,res)=>{

    const {email,password} = req.body

    try {
 
        const user = await User.findOne({ email });

   
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

 
        const isPasswordValid = await bcrypt.compare(password, user.password);

 
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }


        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        
        res.status(200).json({token});
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Internal server error" });
    }

}




module.exports = {
    createUser,
    login
}