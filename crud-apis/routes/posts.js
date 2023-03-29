// this is considered importing
const express = require("express")
// this is using the Router() method from creating "modular, mountable route handlers".
// #Router() is a "complete middleware and routing system"
const router = express.Router()
const Posts = require("../modal/Posts")

// To get all posts
router.get("/", (req, res) => {
    Posts.find()
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json("Request Failed"))
})

// To Create a new post
router.post("/", (req, res) => {
    const { title, description } = req.body
    const post = new Posts({
        title,
        description,
    })
    post.save()
        .then((resp) => res.status(201).json(resp))
        .catch((err) => res.status(400).json("Request Failed"))
})

// To delete a specific post
router.delete("/:id", (req, res) => {
    Posts.deleteOne({ _id: req.params.id })
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json("Request Failed"))
})

// to delete multiple posts
router.post("/delete", (req, res) => {
    Posts.deleteMany({ _id: list, list: { $in: req.body.list } })
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json("Request Failed"))
})

// to get a specific Post
router.get("/:id", (req, res) => {
    Posts.findById(req.params.id)
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json("Request Failed"))
})

// to update a specific post
router.patch("/:id", (req, res) => {
    Posts.updateOne({ _id: req.params.id }, { $set: req.body })
        .then((resp) => res.status(200).json(resp))
        .catch((err) => res.status(400).json("Request Failed"))
})

module.exports = router
