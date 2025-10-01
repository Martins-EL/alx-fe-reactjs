import React from "react";
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <HomePage />
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <AddRecipeForm />
      </div>
    </>
  );
}

export default App;
