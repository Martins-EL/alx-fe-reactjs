import React, { useState, useEffect } from "react";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/src/data.json") // fetch mock data
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center grid-cols-1">
        🍽️ Recipe Collection
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 p-4"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-40 object-cover rounded-xl"
            />
            <h2 className="text-xl font-semibold mt-4">{recipe.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
