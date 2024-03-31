const express = require('express')
const { getPost, recentPost, allPost, singlePost } = require('../controller/post.controller')





const router = express.Router()




router.post("/postD",getPost)
router.get("/recent",recentPost)
router.get("/allPost",allPost)
router.get("/single/:id",singlePost)




module.exports = router