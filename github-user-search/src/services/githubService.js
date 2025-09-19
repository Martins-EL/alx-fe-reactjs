import axios from "axios";

export async function fetchUserData(searchTerm) {
  const response = await fetch(
    `https://api.github.com/users/${encodeURIComponent(searchTerm)}`
  );
  if (!response.ok) {
    throw new Error(`User not found: ${searchTerm}`);
  }
  const data = await response.json();
  return data;
}
export async function getUserData(searchTerm) {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${encodeURIComponent(searchTerm)}`
    );
    return response.data;
  } catch {
    throw new Error(`User not found: ${searchTerm}`);
  }
}
