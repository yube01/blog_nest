const express = require('express')
const { getPost, recentPost } = require('../controller/post.controller')





const router = express.Router()




router.post("/postD",getPost)
router.get("/recent",recentPost)





module.exports = router