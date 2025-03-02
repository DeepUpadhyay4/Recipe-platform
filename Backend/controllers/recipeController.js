const Recipe = require("../models/Recipe")

exports.createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, instructions, prepTime, difficulty } = req.body
    const recipe = new Recipe({
      title,
      description,
      ingredients,
      instructions,
      prepTime,
      difficulty,
      author: req.userId,
      image: req.file ? req.file.path : null,
    })
    await recipe.save()
    res.status(201).json({ message: "Recipe created successfully", recipe })
  } catch (error) {
    res.status(400).json({ message: "Failed to create recipe", error: error.message })
  }
}

exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("author", "username")
    res.json(recipes)
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch recipes", error: error.message })
  }
}

exports.getRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).populate("author", "username")
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" })
    }
    res.json(recipe)
  } catch (error) {
    res.status(400).json({ message: "Failed to fetch recipe", error: error.message })
  }
}

exports.updateRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" })
    }
    if (recipe.author.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized to update this recipe" })
    }
    const updatedRecipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json({ message: "Recipe updated successfully", recipe: updatedRecipe })
  } catch (error) {
    res.status(400).json({ message: "Failed to update recipe", error: error.message })
  }
}

exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" })
    }
    if (recipe.author.toString() !== req.userId) {
      return res.status(403).json({ message: "Not authorized to delete this recipe" })
    }
    await Recipe.findByIdAndDelete(req.params.id)
    res.json({ message: "Recipe deleted successfully" })
  } catch (error) {
    res.status(400).json({ message: "Failed to delete recipe", error: error.message })
  }
}

exports.likeRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id)
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" })
    }
    if (recipe.likes.includes(req.userId)) {
      recipe.likes = recipe.likes.filter((id) => id.toString() !== req.userId)
    } else {
      recipe.likes.push(req.userId)
    }
    await recipe.save()
    res.json({ message: "Recipe like toggled successfully", likes: recipe.likes.length })
  } catch (error) {
    res.status(400).json({ message: "Failed to toggle like", error: error.message })
  }
}

