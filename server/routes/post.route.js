const express = require('express')
const { getPost, recentPost, allPost } = require('../controller/post.controller')





const router = express.Router()




router.post("/postD",getPost)
router.get("/recent",recentPost)
router.get("/allPost",allPost)





module.exports = router