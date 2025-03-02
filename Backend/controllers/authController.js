const User = require("../models/User")
const jwt = require("jsonwebtoken")

exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body
    const user = new User({ username, email, password })
    await user.save()
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
    res.status(201).json({ message: "User registered successfully", token })
  } catch (error) {
    res.status(400).json({ message: "Registration failed", error: error.message })
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: "Invalid email or password" })
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
    res.json({ message: "Login successful", token })
  } catch (error) {
    res.status(400).json({ message: "Login failed", error: error.message })
  }
}

