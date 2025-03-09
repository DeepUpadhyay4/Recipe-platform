import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import RecipeList from "./components/RecipeList"
import RecipeDetail from "./components/RecipeDetail"
import AddRecipe from "./components/AddRecipe"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<RecipeList />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            <Route path="/add-recipe" element={<AddRecipe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

