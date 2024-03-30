const Category = require("../model/category.model")


const getCategory = async(req,res)=>{

    try {

        const allCategory = await Category.find()
        res.status(200).json(allCategory)
        
    } catch (error) {
        console.log(error)
        
    }

}

const postCategory = async(req,res)=>{

    try {
        const {title,img} = req.body

        const userObject = { title, img}

        // Create and store new user 
        const user = await Category.create(userObject)

        if(user){
            res.status(200).json("data inserted")
        }

        
    } catch (error) {
        console.log(error)
    }

}

module.exports = {
    getCategory,
    postCategory
}