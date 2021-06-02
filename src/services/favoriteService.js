import axios from 'axios'
const token = localStorage.getItem('token');
// const baseURL = "https://stock-portfolio-app-api.herokuapp.com"
const baseURL = "http://localhost:3000"

export const getFavorites = async (username) => {
    let favorites = [];
  
    const response = await axios.get(
      `${baseURL}/favorite/${username}`,
      {
        headers: {
          'Authorization': `${token}`
        }
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
        headers: {
          'Authorization': `${token}`
        }
      }
    );
  
    favorites = response.data;
  
    return favorites;
};

export const addFavorite = async (username, symbol) => {
    return await axios.post(
      `${baseURL}/favorite/add/${username}/${symbol}`, 
      {

      },
      {
        headers: {
          'Authorization': `${token}`
        }
      }
    );
};