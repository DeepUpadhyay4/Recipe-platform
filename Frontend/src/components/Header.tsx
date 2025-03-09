import { Link } from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
        
          <img src="https://cdn-icons-png.flaticon.com/512/1869/1869042.png" alt="Recipe Share Logo" />
          <span>Recipe Share</span>
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-recipe">Add Recipe</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

