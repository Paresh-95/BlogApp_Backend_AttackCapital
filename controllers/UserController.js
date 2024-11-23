import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User Already Exists",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      profilePic: `https://api.dicebear.com/5.x/initials/svg?seed=${name}`,
    });

    const payload = {
      id: user._id,
      email: user.email,
      name: user.name,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "4h",
    });

    (user.token = token), (user.password = undefined);

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true, 
      sameSite: "none", 
    };
    
    res.cookie("token", token, options);

    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      success: false,
      message:
        "Internal Server Error,Something went wrong while Signing User Up",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No User Registered with the Email,Register first",
      });
    }

    const payload = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    if (await bcryptjs.compare(password, user.password)) {
      var token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "4h",
      });
    }

    user.token = token;
    user.password = undefined;

    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true, 
      sameSite: "none", 
    };

    res.cookie("token", token, options).status(200).json({
      success: true,
      message: "User Logged In Successfully",
      token,
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: true,
      message: "Internal Server Error, Something went wrong while loggin In",
    });
  }
};

export const logout = async (req, res) => {
  try {
    
    res.clearCookie("token", {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
      secure: true, 
      sameSite: "none", 
    });

    return res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while logging out",
    });
  }
};


export const getUserDetails = async (req,res) =>{
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if(!user){
      return res.status(404).json({
        success:false,
        message:"User not found"
      })
    }

    return res.status(200).json({
      success:true,
      message:"User Fetched Successfully",
      user
    })
    
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching user details",
    });
  }
}


export const getAuthState = async (req, res) => {
  try {
  
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: 'Unauthorized: User not authenticated',
      });
    }

   
    const { _id, name, email, role } = req.user;

    res.status(200).json({
      success: true,
      user: {
        id: _id,
        name,
        email,
        role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
    });
  }
};
