const express = require('express')
const { getCategory, postCategory } = require('../controller/category.controller')



const router = express.Router()



router.get("/category",getCategory)
router.post("/postC",postCategory)





module.exports = router