import express from "express";
import {upload} from "../config/cloudinary.js";
import { createPost, deleteBlog, getAllBlogs, getBlogById, getBlogsByAuthor, updateBlog } from "../controllers/PostController.js";
import {auth} from "../middlewares/auth-middleware.js"

const router = express.Router();

router.post(
  "/blog/create", auth,
  upload.fields([  
    { name: "thumbnail", maxCount: 1 }, 
  ]),
  createPost
);
router.put('/blog/update/:id',auth,updateBlog)
router.get('/blog/getAuthorBlogs',auth,getBlogsByAuthor)
router.get('/blog/getAllBlogs',getAllBlogs)
router.delete('/blog/delete/:id',auth,deleteBlog)
router.get('/blog/getBlog/:id',getBlogById)



export default router;
