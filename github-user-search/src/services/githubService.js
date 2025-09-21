export const fetchUserData = async (username, location = '', minRepos = '') => {
  try {
    const query = ${username}+location:${location}+repos:>=${minRepos};
    const response = await axios.get(https://api.github.com/search/users?q=${query});
    return response.data.items;
  } catch (err) {
    throw new Error(err);
  }
};
