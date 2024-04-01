const express = require('express')
const { recentPost, allPost, singlePost, addPost } = require('../controller/post.controller')





const router = express.Router()




router.post("/addPost",addPost)
router.get("/recent",recentPost)
router.get("/allPost",allPost)
router.get("/single/:id",singlePost)




module.exports = router