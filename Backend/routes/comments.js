const express = require("express")
const router = express.Router()
const commentController = require("../controllers/commentController")
const auth = require("../middleware/auth")

router.post("/:recipeId", auth, commentController.createComment)
router.get("/:recipeId", commentController.getComments)
router.delete("/:id", auth, commentController.deleteComment)

module.exports = router

