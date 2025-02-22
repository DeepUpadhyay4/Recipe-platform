"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import RecipeCard from "./RecipeCard"
import styles from "./RecipeList.module.css"

interface Recipe {
  id: number
  title: string
  description: string
  image: string
  prepTime: string
  difficulty: string
}

const RecipeList = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([])

  useEffect(() => {
    // In a real app, you'd fetch this data from an API
    const mockRecipes: Recipe[] = [
      {
        id: 1,
        title: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish",
        image: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-jumbo-v2.jpg",
        prepTime: "30 mins",
        difficulty: "Medium",
      },
      {
        id: 2,
        title: "Chicken Tikka Masala",
        description: "Flavorful Indian curry",
        image: "https://bellyfull.net/wp-content/uploads/2021/05/Chicken-Tikka-Masala-blog.jpg",
        prepTime: "45 mins",
        difficulty: "Medium",
      },
      {
        id: 3,
        title: "Caesar Salad",
        description: "Fresh and crispy salad",
        image: "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw88e3c11a/images/recipe-Images/caesar-salad-recipe.jpg?sw=1200&sh=1200&sm=fit",
        prepTime: "15 mins",
        difficulty: "Easy",
      },
      {
        id: 4,
        title: "Beef Burger",
        description: "Juicy homemade burger",
        image: "https://www.certifiedirishangus.ie/wp-content/uploads/2019/11/TheUltimateBurgerwBacon_RecipePic.jpg",
        prepTime: "20 mins",
        difficulty: "Easy",
      },
      {
        id: 5,
        title: "Chocolate Lava Cake",
        description: "Decadent dessert",
        image: "https://static.toiimg.com/photo/53096885.cms",
        prepTime: "25 mins",
        difficulty: "Medium",
      },
      {
        id: 6,
        title: "Vegetable Stir Fry",
        description: "Healthy and quick meal",
        image: "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-images/stir-fry-vegetables-recipe-800x800.jpg?rev=56e6eec8c7b14887a5c238eb35a20da9&vd=20240606T181334Z&extension=webp&hash=FF02DA13F3817A968D847A8A85B1E48D",
        prepTime: "20 mins",
        difficulty: "Easy",
      },
    ]
    setRecipes(mockRecipes)
  }, [])

  return (
    <div className={styles.recipeList}>
      <h1>Delicious Recipes</h1>
      <div className={styles.grid}>
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`} className={styles.recipeLink}>
            <RecipeCard recipe={recipe} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecipeList

