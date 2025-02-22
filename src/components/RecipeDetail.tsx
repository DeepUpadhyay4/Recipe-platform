"use client"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import styles from "./RecipeDetail.module.css"

interface Recipe {
  id: number
  title: string
  description: string
  image: string
  prepTime: string
  difficulty: string
  ingredients: string[]
  instructions: string[]
}

const RecipeDetail = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    // Full mock data for all recipes
    const mockRecipes: Recipe[] = [
      {
        id: 1,
        title: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish",
        image: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-jumbo-v2.jpg",
        prepTime: "30 mins",
        difficulty: "Medium",
        ingredients: [
          "400g spaghetti",
          "200g pancetta",
          "4 large eggs",
          "100g Pecorino cheese",
          "100g Parmesan cheese",
          "Freshly ground black pepper",
        ],
        instructions: [
          "Boil spaghetti in salted water until al dente.",
          "Fry pancetta until crispy.",
          "Whisk together eggs, Pecorino, and Parmesan.",
          "Drain pasta and mix with pancetta off heat.",
          "Stir in egg mixture to create a creamy sauce.",
          "Season with black pepper and serve hot.",
        ],
      },
      {
        id: 2,
        title: "Chicken Tikka Masala",
        description: "Flavorful Indian curry",
        image: "https://bellyfull.net/wp-content/uploads/2021/05/Chicken-Tikka-Masala-blog.jpg",
        prepTime: "45 mins",
        difficulty: "Medium",
        ingredients: [
          "500g boneless chicken",
          "1 cup yogurt",
          "2 tbsp garam masala",
          "1 tbsp turmeric",
          "1 tbsp cumin",
          "1 cup tomato puree",
          "1/2 cup fresh cream",
        ],
        instructions: [
          "Marinate chicken with yogurt and spices for 4 hours.",
          "Grill or fry chicken pieces until cooked.",
          "In a pan, sauté onions and add tomato puree.",
          "Add cream and grilled chicken, cook for 20 minutes.",
          "Garnish with coriander and serve with naan.",
        ],
      },
      {
        id: 3,
        title: "Caesar Salad",
        description: "Fresh and crispy salad",
        image: "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw88e3c11a/images/recipe-Images/caesar-salad-recipe.jpg",
        prepTime: "15 mins",
        difficulty: "Easy",
        ingredients: [
          "1 head romaine lettuce",
          "1/2 cup croutons",
          "1/4 cup Parmesan cheese",
          "Caesar dressing",
          "Salt and pepper to taste",
        ],
        instructions: [
          "Chop romaine lettuce.",
          "Toss lettuce with croutons and Parmesan.",
          "Add Caesar dressing and mix well.",
          "Season with salt and pepper.",
          "Serve chilled.",
        ],
      },
      {
        id: 4,
        title: "Beef Burger",
        description: "Juicy homemade burger",
        image: "https://www.certifiedirishangus.ie/wp-content/uploads/2019/11/TheUltimateBurgerwBacon_RecipePic.jpg",
        prepTime: "20 mins",
        difficulty: "Easy",
        ingredients: [
          "500g ground beef",
          "1 egg",
          "Salt and pepper",
          "Burger buns",
          "Cheese slices",
          "Lettuce, tomato, onion",
        ],
        instructions: [
          "Mix beef, egg, salt, and pepper.",
          "Form patties and grill until cooked.",
          "Toast buns and add cheese on top of the patty.",
          "Assemble burger with lettuce, tomato, and onion.",
          "Serve with fries.",
        ],
      },
      {
        id: 5,
        title: "Chocolate Lava Cake",
        description: "Decadent dessert",
        image: "https://static.toiimg.com/photo/53096885.cms",
        prepTime: "25 mins",
        difficulty: "Medium",
        ingredients: [
          "100g dark chocolate",
          "100g butter",
          "2 eggs",
          "1/4 cup sugar",
          "1/4 cup flour",
        ],
        instructions: [
          "Melt chocolate and butter together.",
          "Whisk eggs and sugar until fluffy.",
          "Combine with melted chocolate mixture.",
          "Fold in flour and pour into molds.",
          "Bake at 220°C for 10 mins.",
          "Serve immediately for a molten center.",
        ],
      },
      {
        id: 6,
        title: "Vegetable Stir Fry",
        description: "Healthy and quick meal",
        image: "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg",
        prepTime: "20 mins",
        difficulty: "Easy",
        ingredients: [
          "1 cup broccoli",
          "1 bell pepper",
          "1 carrot",
          "2 tbsp soy sauce",
          "1 tsp sesame oil",
          "Salt and pepper to taste",
        ],
        instructions: [
          "Heat oil in a wok.",
          "Add vegetables and stir-fry for 5-7 mins.",
          "Add soy sauce and cook for another 2 mins.",
          "Season with salt and pepper.",
          "Serve hot with rice or noodles.",
        ],
      },
    ]

    // Find the recipe by ID from the URL
    const selectedRecipe = mockRecipes.find((r) => r.id === parseInt(id || "0"))
    setRecipe(selectedRecipe || null)
  }, [id])

  if (!recipe) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.recipeDetail}>
      <div className={styles.hero}>
        <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className={styles.image} />
        <div className={styles.heroContent}>
          <h1>{recipe.title}</h1>
          <p className={styles.description}>{recipe.description}</p>
          <div className={styles.meta}>
            <span>Prep Time: {recipe.prepTime}</span>
            <span>Difficulty: {recipe.difficulty}</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.ingredients}>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className={styles.instructions}>
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail
