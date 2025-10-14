// src/components/PostsComponent.jsx
import React from "react";
import { useQuery } from "@tanstack/react-query";

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }
    return res.json();
  });
}

function PostsComponent() {
  const { data, error, isError, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });

  if (isLoading) {
    return <p className="text-center text-gray-600">Loading posts...</p>;
  }

  if (isError) {
    return <p className="text-center text-red-500">Error: {error.message}</p>;
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Posts</h2>
        <button
          onClick={() => refetch()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <ul className="space-y-3">
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg text-gray-800">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
