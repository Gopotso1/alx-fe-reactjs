import axios from 'axios';

const fetchUserData = async (username, location, minRepos, page = 1) => {
  const query = `user:${username}${location ? `+location:${location}` : ''}${minRepos ? `+repos:>${minRepos}` : ''}`;
  try {
    const response = await axios.get(`https://api.github.com/search/users?q=${query}&page=${page}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchUserData;