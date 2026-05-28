import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

    const generateToken = (id) => {
        return jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: "30d",
        });
    }

export const userRegister = async(req, res) => {
    const {fullname, email, password, role, profileImage, phone, isActive} = req.body;

    const userExists = await User.findOne({ email });
    if(userExists){
        return res.status(400).json({ message: "User already exists" });
    }
    const user = await User.create({
        fullname, 
        email, 
        password, 
        role, 
        profileImage, 
        phone, 
        isActive
    });
    if(user){
        res.status(201).json({
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            password: user.password,
            role: user.role,
            profileImage: user.profileImage,
            phone: user.phone,
            isActive: user.isActive,
            token: generateToken(user._id),
        });
    }
    else {
        res.status(400).json({ message: "Invalid user data" });
    }
}