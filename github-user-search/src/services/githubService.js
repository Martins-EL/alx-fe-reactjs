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
