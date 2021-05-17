import axios from 'axios'

// const baseURL = "https://stock-portfolio-app-api.herokuapp.com"
const baseURL = "http://localhost:3000"

export const favoriteService = async (username) => {
    let favorites = [];
  
    const response = await axios.get(
      `${baseURL}/favorite/${username}`,
      {
        withCredentials: true,
      }
    );
  
    favorites = response.data;
  
    return favorites;
};