import React, { useEffect } from "react";
import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecommendationsList = () => {
  const { recommendations, generateRecommendations, favorites } =
    useRecipeStore((state) => ({
      recommendations: state.recommendations,
      generateRecommendations: state.generateRecommendations,
      favorites: state.favorites,
    }));

  useEffect(() => {
    if (favorites.length > 0) {
      generateRecommendations();
    }
  }, [favorites, generateRecommendations]);

  return (
    <div>
      <h2>Recommended For You</h2>
      {recommendations.length > 0 ? (
        recommendations.map((recipe) => (
          <div key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>
          </div>
        ))
      ) : (
        <p>Add some favorites to get recommendations.</p>
      )}
    </div>
  );
};

export default RecommendationsList;
