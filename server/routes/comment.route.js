const express = require('express')
const { postComment, getComment } = require('../controller/comment.controller')



const router = express.Router()


router.post("/addComment",postComment)
router.get("/getComment/:slug",getComment)




module.exports = router