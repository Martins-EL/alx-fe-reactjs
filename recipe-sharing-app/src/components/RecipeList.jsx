import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const RecipeList = () => {
  const { recipes, filteredRecipes, searchTerm, filterRecipes } =
    useRecipeStore((state) => ({
      recipes: state.recipes,
      filteredRecipes: state.filteredRecipes,
      searchTerm: state.searchTerm,
      filterRecipes: state.filterRecipes,
    }));

  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  const recipesToDisplay = searchTerm ? filteredRecipes : recipes;

  return (
    <div>
      {recipesToDisplay.map((recipe) => (
        <div key={recipe.id}>
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};
export default RecipeList;
