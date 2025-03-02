const Comment = require("../models/Comment")

exports.createComment = async (req, res) => {
  try {
    const { content } = req.body
    const comment = new Comment({
      content,
      author: req.userId,
      recipe: req.params.recipeId,
    })
    await comment.save()
    res.status(201).json({ message: "Comment created successfully", comment })
  } catch (error) {
    res.status(400).json({ message: "Failed to create comment", error: error.message })
  }
}

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ recipe: req.params.recipeId }).populate("author", "username")
    res.json(comments)
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch comments", error: error.message })
  }
}

exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id)
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" })
    }
    if (comment.author.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized to delete this comment" })
    }
    await Comment.findByIdAndDelete(req.params.id)
    res.json({ message: "Comment deleted successfully" })
  } catch (error) {
    res.status(400).json({ message: "Failed to delete comment", error: error.message })
  }
}

