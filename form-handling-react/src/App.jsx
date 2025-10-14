import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "../components/FormikForm";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PostsComponent from "../components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  return (
    // Wrap the entire app inside QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center space-y-10 p-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Form Handling and React Query Demo
        </h1>

        {/* Controlled Form */}
        <RegistrationForm />

        {/* Formik Form */}
        <FormikForm />

        {/* React Query Data Fetching */}
        <div className="w-full max-w-3xl mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4">
            React Query Demo
          </h2>
          <PostsComponent />
        </div>

        {/* React Query DevTools */}
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
