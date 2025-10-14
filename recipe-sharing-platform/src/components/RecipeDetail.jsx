import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.recipes.find(
          (recipeItem) => recipeItem.id === parseInt(id)
        );
        setRecipe(selectedRecipe);
      });
  }, [id]);

  if (!recipe) {
    return <div className="text-center py-10 text-gray-500">Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-4 text-blue-600 hover:underline text-sm"
      >
        ← Back to Home
      </Link>

      {/* Recipe Image */}
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-2xl shadow-md mb-6"
      />

      {/* Recipe Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>

      {/* Ingredients Section */}
      <div className="bg-white shadow-md rounded-2xl p-5 mb-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Ingredients
        </h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          {recipe.ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Instructions Section */}
      <div className="bg-white shadow-md rounded-2xl p-5">
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Cooking Instructions
        </h2>
        <ol className="list-decimal pl-6 text-gray-600 space-y-2">
          {recipe.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
