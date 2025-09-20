import React, { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setUser(null);
    if (!username.trim()) {
      return;
    }

    setLoading(true);
    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Looks like we cant find the user</div>}
      {!loading && user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={50} />
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
