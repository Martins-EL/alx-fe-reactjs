// src/components/RegistrationForm.jsx
import React, { useState } from "react";

function RegistrationForm() {
  // Use individual state vars so inputs use value={username}, etc.
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!username.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required!");
      setMessage("");
      return;
    }

    // Simulate API call / registration
    console.log("User Registered:", { username, email, password });

    setMessage("Registration successful!");
    setError("");
    // reset fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">Register User</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}               {/* required by your test */}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}                  {/* required by your test */}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}               {/* required by your test */}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {message && <p className="text-green-600 text-sm">{message}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold p-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
