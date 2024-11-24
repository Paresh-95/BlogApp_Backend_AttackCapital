import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import dbConnect from "../config/db.js";
import cors from "cors"
import userRoutes from "../routes/UserRoutes.js"
import postRoutes from "../routes/PostRoutes.js"
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000

app.use(
    cors({
      origin:"https://blog-app-frontend-attack-capital.vercel.app/",
      // origin:"http://localhost:3000",
      credentials: true,
    })
  );
app.use(express.json());
app.use(cookieParser())

app.use('/api/v1',userRoutes)
app.use('/api/v1',postRoutes)



app.get("/",(req,res)=>{
    res.send("HOME ROUTE");
})


dbConnect();
app.listen(PORT,()=>{
    console.log(`Server Running on PORT ${PORT}`)
})