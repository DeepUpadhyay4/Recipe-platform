const express = require("express")
const router = express.Router()
const recipeController = require("../controllers/recipeController")
const auth = require("../middleware/auth")
const upload = require("../middleware/upload")

router.post("/", auth, upload.single("image"), recipeController.createRecipe)
router.get("/", recipeController.getAllRecipes)
router.get("/:id", recipeController.getRecipe)
router.put("/:id", auth, recipeController.updateRecipe)
router.delete("/:id", auth, recipeController.deleteRecipe)
router.post("/:id/like", auth, recipeController.likeRecipe)

module.exports = router

