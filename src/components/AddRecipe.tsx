"use client"

import type React from "react"

import { useState } from "react"
import styles from "./AddRecipe.module.css"

const AddRecipe = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [instructions, setInstructions] = useState("")
  const [prepTime, setPrepTime] = useState("")
  const [difficulty, setDifficulty] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this data to an API
    console.log({ title, description, ingredients, instructions, prepTime, difficulty })
    // Reset form
    setTitle("")
    setDescription("")
    setIngredients("")
    setInstructions("")
    setPrepTime("")
    setDifficulty("")
    alert("Recipe added successfully!")
  }

  return (
    <div className={styles.addRecipe}>
      <h1>Add New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="ingredients">Ingredients (one per line)</label>
          <textarea id="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="instructions">Instructions (one per line)</label>
          <textarea id="instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="prepTime">Preparation Time</label>
          <input type="text" id="prepTime" value={prepTime} onChange={(e) => setPrepTime(e.target.value)} required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="difficulty">Difficulty</label>
          <select id="difficulty" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} required>
            <option value="">Select difficulty</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <button type="submit" className={styles.submitButton}>
          Add Recipe
        </button>
      </form>
    </div>
  )
}

export default AddRecipe

