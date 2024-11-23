import mongoose from "mongoose";
import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const userId = req.user.id;

    if (!req.files || !req.files.thumbnail) {
      return res.status(400).json({
        success: false,
        message: "Both thumbnail and content image are required",
      });
    }

    const thumbnail = req.files.thumbnail[0].path;
   

    const blog = await Post.create({
      title,
      thumbnail,
      content,
      author: userId,
    });

    return res.status(201).json({
      success: true,
      message: "Blog Created Successfully",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while Creating the post",
    });
  }
};

export const getAllBlogs = async (req, res) => {
  try {

    const blogs = await Post.find()
      .populate("author", "name profilepic")
      .sort({ createdAt: -1 })
      .exec();

    if (!blogs.length) {
      return res.status(404).json({
        success: false,
        message: "No blogs found",
      });
    }

    return res.status(201).json({
      success: true,
      message: "Blog Retrieved Successfully",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message:
        "Internal Server Error, Something went wrong while Fetching the posts",
    });
  }
};


export const getBlogsByAuthor = async(req,res) =>{
    try {
        const userId = req.query.author

        const blogs = await Post.find({author:userId}).populate("author",'name profilepic').sort({ createdAt: -1 })
        .exec();

        return res.status(201).json({
            success:true,
            message:"Blog by Author Retrieved Successfully",
            blogs
        })

        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Internal Server Error,Something went wrong"
        })
    }
}


export const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Post.findById(id).populate('author', 'name');

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Blog fetched successfully',
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching the blog',
    });
  }
};





export const updateBlog = async(req,res) =>{
    try {
        const blogId= req.params.id;
        const {title,content} = req.body;
        const userId = req.user.id;

        const blog = await Post.findById(blogId);

        if(!blog){
            return res.status(404).json({
                success:false,
                message:"Post not found"
            })
        }
        
        if(blog.author.toString()!==userId){
            return res.status(403).json({
                success:false,
                message:"You are authorized to update this post"
            })
        }
        const updateData = {}

        if(title) updateData.title = title
        if(content) updateData.content = content
        if(req.files){
            if(req.files.thumbnail){
                updateData.thumbnail = req.files.thumbnail[0].path
            }
            
        }

        const updateBlog = await Post.findByIdAndUpdate(postId,updateData,{
            new:true
        });

        return res.status(200).json({
            success:true,
            message:"Blog updated Successfully",
            blog:updateBlog
        })


    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success:false,
            messagw:"Internal Server Error Something went wrong while updating the blog"
        })
    }
}

export const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id; 
    const userId = req.user.id;   
    console.log(blogId)

  
    const blog = await Post.findById(blogId);

    
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog post not found",
      });
    }

    
    if (blog.author.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this post",
      });
    }

    
    await blog.deleteOne();

    
    return res.status(200).json({
      success: true,
      message: "Blog post deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while deleting the post",
    });
  }
};
