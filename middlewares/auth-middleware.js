import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const auth = async (req, res,next) => {
  try {
    const token = req.cookies?.token;
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token Missing",
      });
    }
    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = payload;
      next();
    } catch (error) {
      console.log("Token verification error", error);
      return res.status(401).json({
        success: false,
        message: "Token is Invalid Token Cannot be verified",
      });
    }
  } catch (error) {
    console.log("Auth middleware error", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while verifying the token",
    });
  }
};
