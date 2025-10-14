import FormikForm from "./components/formikForm";
import RegistrationForm from "./components/RegistrationForm";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/Postscomponent.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <RegistrationForm />

      <formikForm />
      <QueryClientProvider client={queryClient}>
        <div className="min-h-screen bg-gray-100 p-6">
          <h1 className="text-3xl font-bold text-center mb-6">
            React Query Demo
          </h1>
          <PostsComponent />
        </div>
      </QueryClientProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
