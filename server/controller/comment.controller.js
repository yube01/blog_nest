const Comment = require("../model/comment.model")


const postComment = async (req, res) => {
    try {
      const { desc,username,posts } = req.body;
  
      const userObject = { desc,username,posts };
  
      // Create and store new user
      const user = await Comment.create(userObject);
  
      if (user) {
        res.status(200).json("data inserted");
      }
    } catch (error) {
      console.log(error);
    }
  };

const getComment = async(req,res)=>{
    try {
        const postId = req.params.slug

        const comments = await Comment.find({ posts: postId });
        res.status(200).json(comments);

    } catch (error) {
        console.log(error)
    }
}
  
  module.exports = {
    postComment,
    getComment
  };
  