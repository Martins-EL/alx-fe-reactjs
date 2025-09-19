import React, { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const [loading, setLoading] = useState(false);

  return (
    <>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setError("");
          setUser(null);
          if (username.trim()) {
            setLoading(true);
            try {
              const res = await fetch(
                `https://api.github.com/users/${username.trim()}`
              );
              if (!res.ok) {
                throw new Error("User not found");
              }
              const data = await res.json();
              setUser(data);
            } catch {
              setError("User not found");
            } finally {
              setLoading(false);
            }
          }
        }}
        style={{ marginBottom: "1rem" }}
      >
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleChange}
          style={{ padding: "0.5rem", width: "250px" }}
        />
        <button
          type="submit"
          style={{ marginLeft: "0.5rem", padding: "0.5rem 1rem" }}
        >
          Search
        </button>
      </form>
      {loading && (
        <div style={{ color: "blue", marginTop: "0.5rem" }}>Loading...</div>
      )}
      {!loading && error && (
        <div style={{ color: "red", marginTop: "0.5rem" }}>
          Looks like we cant find the user
        </div>
      )}
      {!loading && user && (
        <div
          style={{
            marginTop: "1rem",
            border: "1px solid #ccc",
            padding: "1rem",
            borderRadius: "4px",
          }}
        >
          <img
            src={user.avatar_url}
            alt={user.login}
            width={80}
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name ? user.name : user.login}</h2>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </>
  );
}

export default Search;
