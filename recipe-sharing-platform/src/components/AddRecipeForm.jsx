import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const list = ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");
      if (list.length < 2) {
        newErrors.ingredients = "Please provide at least 2 ingredients.";
      }
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const recipeData = {
      id: Date.now(),
      title,
      ingredients: ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== ""),
      steps,
    };

    console.log("✅ New Recipe Submitted:", recipeData);

    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        ➕ Add a New Recipe
      </h2>

      {/* ✅ Use md:grid for responsive layout */}
      <form
        onSubmit={handleSubmit}
        className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-6"
      >
        {/* Title */}
        <div className="col-span-2">
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g., Spaghetti Carbonara"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block font-medium mb-1">Ingredients</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className={`w-full border rounded-lg p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter ingredients separated by commas"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block font-medium mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className={`w-full border rounded-lg p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Describe the preparation steps..."
          />
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={!title || !ingredients || !steps}
          >
            Submit Recipe
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddRecipeForm;
