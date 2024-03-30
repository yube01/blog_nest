const Posts = require("../model/post.model")



const recentPost = async(req,res)=>{

    try {


        const posts = await Posts.find().sort({createdAt: -1}).limit(2)
  
      res.status(200).json(posts);
        
    } catch (error) {
        console.log(error)
    }
}


const getPost = async(req,res)=>{


    try {
        const {title,desc} = req.body

        const userObject = { title, desc}

        // Create and store new user 
        const user = await Posts.create(userObject)

        if(user){
            res.status(200).json("data inserted")
        }

        
    } catch (error) {
        console.log(error)
    }


}


module.exports ={
    getPost,
    recentPost
} 