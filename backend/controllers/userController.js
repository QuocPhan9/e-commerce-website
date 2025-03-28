import validator from 'validator'
import bcrypt from 'bcrypt'
import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js'


const createToken = (id) => {
    return JWT.sign({id}, process.env.JWT_SECRET)
}

//Route for user login
const loginUser = async (req, res) => {
    try {

        const {email, password} = req.body;

        const user = await userModel.findOne({email});

        if (!user) {
            return res.status(400).json({success: false, message: "User doesn't exists"});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if(isMatch) {
            const token = createToken(user._id);
            res.status(200).json({success: true, token});
        } else {
            res.status(400).json({success: false, message: "Invalid credentials"});
        }

    } catch (error) {
        console.error(error);
        res.status(402).json({success: false, message: error.message});
    }
}

//Route for user register
const registerUser = async (req, res) => {
    try {

        const {name, email, password} = req.body;
        //check user already exists or not
        const exists = await userModel.findOne({email});
        if(exists) {
            return res.status(400).json({success: false, message: "User already exists"});
        }
        
        //validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.status(400).json({success: false, message: "Please enter a valid email"});
        }
        if (password.length < 8) {
            return res.status(400).json({success: false, message: "Please enter a strong password"});
        }

        //hash user password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name, 
            email,
            password: hashedPassword
        });

        const user = await newUser.save();

        const token = createToken(user._id);

        res.status(200).json({success: true, token});

    } catch (error) {
        console.error(error);
        res.status(402).json({success: false, message: error.message});
    }
}

//Route for admin login
const adminLogin = async (req, res) => {
    try {
        
        const {email,password}  = req.body

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = JWT.sign(email + password, process.env.JWT_SECRET);
            res.status(201).json({success:true, token})
        } else {
            res.status(400).json({success:false, message: "Invalid credentials"})
        }
    } catch (error) {
        console.error(error);
        res.status(404).json({success: false, message: error.message});
    }
}



export {loginUser, registerUser, adminLogin}
