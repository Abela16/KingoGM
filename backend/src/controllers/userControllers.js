import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

const formatUserResponse = (user) => ({
  _id: user._id,
  fullname: user.fullname,
  email: user.email,
  role: user.role,
  profileImage: user.profileImage,
  phone: user.phone,
  isActive: user.isActive,
});

export const userRegister = async (req, res) => {
  try {
    const { fullname, email, password, phone } = req.body;

    if (!fullname || !email || !password || !phone) {
      return res.status(400).json({ message: "Please fill in all required fields" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({
      fullname,
      email,
      password,
      phone,
    });

    res.status(201).json({
      user: formatUserResponse(user),
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(400).json({ message: error.message || "Invalid user data" });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      return res.json({
        user: formatUserResponse(user),
        token: generateToken(user._id),
      });
    }

    return res.status(401).json({ message: "Invalid email or password" });
  } catch (error) {
    return res.status(500).json({ message: error.message || "Login failed" });
  }
};

export const getUserProfile = async (req, res) => {
  res.json({ user: req.user });
};

export const getAdminOverview = async (req, res) => {
  const totalMembers = await User.countDocuments({ role: "member" });
  const activeMembers = await User.countDocuments({ role: "member", isActive: true });
  const totalUsers = await User.countDocuments();

  res.json({
    totalMembers,
    activeMembers,
    totalUsers,
    message: "Admin dashboard data loaded successfully",
  });
};
