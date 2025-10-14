import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <div className="min-h-screen bg-gray-100">
            <Route path="/" element={<HomePage />} />
          </div>
          <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <AddRecipeForm />
          </div>
          <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <Route path="/recipe/:id" element={<AddRecipeForm />} />
          </div>
          <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <Route path="/recipe/:id" element={<RecipeDetail />} />
          </div>
        </Routes>
      </Router>

      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </div>
    </>
  );
}

export default App;
