const express = require("express")
const dotenv = require("dotenv").config()
const mongoose = require("mongoose")
const userRoute = require("./routes/user.route")
const categoryRoute  = require("./routes/category.route")
const postRoute = require("./routes/post.route")
const commentRoute = require("./routes/comment.route")
const cors = require("cors")

const app = express()

const url = process.env.MONGO

app.use(cors({
  origin:"*"
}))

app.use(express.json())

app.use('/',userRoute)
app.use('/',categoryRoute)
app.use('/',postRoute)
app.use('/',commentRoute)

mongoose.connect(url)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

app.listen(9000,()=>{
    console.log("Server started")
})

