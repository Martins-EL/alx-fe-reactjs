import { create } from "zustand";

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  addRecipe: (newRecipe) => {
    set((state) => ({ recipes: [...state.recipes, newRecipe] }));
    get().filterRecipes(); // Re-filter when recipes change
  },
  setRecipes: (recipes) => {
    set({ recipes });
    get().filterRecipes(); // Re-filter when recipes change
  },
  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    }));
    get().filterRecipes(); // Re-filter when recipes change
  },
  updateRecipe: (updatedRecipe) => {
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    }));
    get().filterRecipes();
  },
  searchTerm: "",
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },
  filteredRecipes: [],
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
  favorites: [],
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  recommendations: [],
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
