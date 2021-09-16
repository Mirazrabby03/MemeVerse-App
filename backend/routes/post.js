const express = require("express");
const { addPost, updatePost, deletePost, likePost, getPost, newsFeed, commentPost } = require("../controller/postController");
const requireSignin = require("../middleware");
const router = express.Router();

router.post("/",  addPost)
router.put("/:id", updatePost)
router.delete("/:id", deletePost)
router.put("/:id/like", likePost)
router.put("/:id/comment", commentPost)
router.get("/:id", getPost)
router.get("/timeline/:userId", newsFeed)

module.exports = router;