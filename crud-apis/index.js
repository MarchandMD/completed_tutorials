// required packages
const express = require("express")
const mongoose = require("mongoose")
require("dotenv/config")

// instantiation of necessary objects
const app = express()

// instantiation of an environment port
const port = process.env.PORT || 3000

// routes
const postRouter = require("./routes/posts")

// routes file
app.get("/", (req, res) => {
    res.send("Hello there")
})

// middlewares
app.use(express.json())
app.use("/post", postRouter)

// database connection
mongoose
    .connect(process.env.DB_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB connected "))
    .catch((err) => console.log(err))

// spinning up the server
app.listen(port, () => console.log(`app running locally in the port ${port}`))
