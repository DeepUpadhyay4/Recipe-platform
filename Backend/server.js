require("dotenv").config()
console.log("MONGODB_URI:", process.env.MONGODB_URI)
console.log("JWT_SECRET:", process.env.JWT_SECRET)
console.log("PORT:", process.env.PORT)
const express = require("express")
const cors = require("cors")
const connectDB = require("./config/database")
const authRoutes = require("./routes/auth")
const recipeRoutes = require("./routes/recipes")
const commentRoutes = require("./routes/comments")

const app = express()

// Connect to MongoDB
connectDB()

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/uploads", express.static("uploads"))

// Routes
app.use("/api/auth", authRoutes)
app.use("/api/recipes", recipeRoutes)
app.use("/api/comments", commentRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

