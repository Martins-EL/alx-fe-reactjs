import React, { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // ✅ Validation function
  const validate = () => {
    const newErrors = {};

    if (!title.trim()) {
      newErrors.title = "Recipe title is required.";
    }

    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else {
      const ingredientList = ingredients
        .split(",")
        .map((item) => item.trim())
        .filter((item) => item !== "");
      if (ingredientList.length < 2) {
        newErrors.ingredients = "Please provide at least 2 ingredients.";
      }
    }

    if (!steps.trim()) {
      newErrors.steps = "Preparation steps are required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // ✅ valid if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return; // stop if invalid

    // Form is valid → create recipe object
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

    // Reset form
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

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) validate(); // live validate
            }}
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
            onChange={(e) => {
              setIngredients(e.target.value);
              if (errors.ingredients) validate(); // live validate
            }}
            className={`w-full border rounded-lg p-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter ingredients separated by commas"
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block font-medium mb-1">Preparation Steps</label>
          <textarea
            value={steps}
            onChange={(e) => {
              setSteps(e.target.value);
              if (errors.steps) validate(); // live validate
            }}
            className={`w-full border rounded-lg p-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Describe the preparation steps..."
          />
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          disabled={!title || !ingredients || !steps} // ✅ prevent empty submit
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
