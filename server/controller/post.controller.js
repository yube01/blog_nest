const Posts = require("../model/post.model");

const recentPost = async (req, res) => {
  const url = req.query.slug;

  try {
    if (url === "initial") {
      const posts = await Posts.find().sort({ createdAt: -1 }).limit(2);
      res.status(200).json(posts);
    } else {
      const posts = await Posts.find({ slug: url });
      res.status(200).json(posts);
    }
  } catch (error) {
    console.log(error);
  }
};

const allPost = async (req, res) => {
  try {
    const posts = await Posts.find().sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
};


const singlePost = async(req,res)=>{

  const id = req.params.id


  try {
    const post = await Posts.findOne({_id:id});

    res.status(200).json(post);
  } catch (error) {
    console.log(error);
  }
  
}

const getPost = async (req, res) => {
  try {
    const { title, desc, slug } = req.body;

    const userObject = { title, desc, slug };

    // Create and store new user
    const user = await Posts.create(userObject);

    if (user) {
      res.status(200).json("data inserted");
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPost,
  recentPost,
  allPost,
  singlePost
};
