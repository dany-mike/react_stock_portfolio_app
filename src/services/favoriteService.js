import axios from 'axios'

// const baseURL = "https://stock-portfolio-app-api.herokuapp.com"
const baseURL = "http://localhost:3000"

export const getFavorites = async (username) => {
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

export const removeFavorite = async (username, symbol) => {
    let favorites = [];
  
    const response = await axios.delete(
      `${baseURL}/favorite/delete/${username}/${symbol}`,
      {
        withCredentials: true,
      }
    );
  
    favorites = response.data;
  
    return favorites;
};