import styles from "./RecipeCard.module.css"

interface Recipe {
  id: number
  title: string
  description: string
  image: string
  prepTime: string
  difficulty: string
}

interface RecipeCardProps {
  recipe: Recipe
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className={styles.card}>
      <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className={styles.image} />
      <div className={styles.content}>
        <h2>{recipe.title}</h2>
        <p>{recipe.description}</p>
        <div className={styles.meta}>
          <span>{recipe.prepTime}</span>
          <span>{recipe.difficulty}</span>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard

