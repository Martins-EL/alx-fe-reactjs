// src/components/RegistrationForm.jsx
import React, { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    let validationErrors = {};

    if (!username) {
      validationErrors.username = "Username is required";
    }

    if (!email) {
      validationErrors.email = "Email is required";
    }

    if (!password) {
      validationErrors.password = "Password is required";
    }

    // Update errors state
    setErrors(validationErrors);

    // If there are validation errors, stop submission
    if (Object.keys(validationErrors).length > 0) {
      setMessage("");
      return;
    }

    // Simulate API submission
    console.log("User Registered:", { username, email, password });

    // Show success message
    setMessage("Registration successful!");
    setErrors({});

    // Reset input fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">User Registration</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username Field */}
        <div>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

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
