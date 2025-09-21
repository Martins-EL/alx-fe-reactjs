import React, { useState } from "react";
import { fetchUserData, fetchUserRepos } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]); // ✅ added repos state
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
        <input
          className="w-full border p-2 rounded"
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          className="w-full border p-2 rounded"
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          type="submit"
        >
          Search
        </button>
      </form>
      {loading && <div>Loading...</div>}
      {!loading && error && <div>Looks like we cant find the user</div>}
      {!loading && user && (
        <div>
          <img src={user.avatar_url} alt={user.login} width={50} />

          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-16 h-16 rounded-full"
          />
          <p>Name: {user.login}</p>
          <p>Location: {user.location || "N/A"}</p>
          <p>Public Repos: {user.public_repos}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
          <h3 className="text-lg font-semibold mt-4">Repositories:</h3>
          <ul className="list-disc list-inside">
            {repos.map((repo) => (
              <li key={repo.id} className="mt-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default Search;
