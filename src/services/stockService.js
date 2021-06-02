import axios from "axios";

const baseURL = "https://stock-portfolio-app-api.herokuapp.com"
// const baseURL = "http://localhost:3000"
const token = localStorage.getItem("token")


export const getCompanyBySymbol = async (username, walletId, symbol) => {
  let company;

  const response = await axios.get(
    `${baseURL}/wallet/get-stock/${username}/${walletId}/${symbol}`,
    {
    headers: {
        'Authorization': `${token}`
    }
    }
  );

  company = response.data;

  return company;
};

export const searchValueByNameAndSector = async (nameValue, sectorValue) => {
  let company;

  const response = await axios.get(
    `${baseURL}/search?name=${nameValue}&sector=${sectorValue}`,
    {
      headers: {
        'Authorization': `${token}`
      }
    }
  );

  company = response.data;

  return company;
};

export const searchValueByName = async (nameValue) => {
  let company;

  const response = await axios.get(
    `${baseURL}/search?name=${nameValue}`,
    {
      headers: {
        'Authorization': `${token}`
      }
    }
  );

  company = response.data;

  return company;
};

export const searchValueBySector = async (sectorValue) => {
  let company;

  const response = await axios.get(
    `${baseURL}/search?sector=${sectorValue}`,
    {
      headers: {
        'Authorization': `${token}`
      }
    }
  );

  company = response.data;

  return company;
};

export const getStockPricesBySymbol = async (symbol) => {
  let aPrices;

  const response = await axios.get(
    `${baseURL}/marketstack/eod-price/${symbol}/`,
    {
      headers: {
        'Authorization': `${token}`
      }
    }
  );

  aPrices = response.data.data;

  return aPrices;
};

export const getStockNameBySymbol = async (symbol) => {
  let stockName;

  const response = await axios.get(
    `${baseURL}/search/company-name/${symbol}`,
    {
      headers: {
        'Authorization': `${token}`
      }
    }
  );

  stockName = response.data;

  return stockName;
};

export const addStockIntoWallet = async (
  symbol,
  walletId,
  username,
  sharesNumber
) => {
  return await axios.post(
    `${baseURL}/wallet/add-stock/${username}/${walletId}/${symbol}`,
    {
      sharesNumber: sharesNumber,
    },
    {
      headers: {
        'Authorization': `${token}`
      }
    }
  );
};

export const deleteStockInWallet = async (username, walletId, symbol) => {
  await axios.delete(
    `${baseURL}/wallet/delete-stock/${username}/${walletId}/${symbol}`,
    {
      headers: {
        'Authorization': `${token}`
      }
    }
  );
};

export const editStock = async (username, walletId, symbol, sharesNumber) => {
  return await axios.patch(
    `${baseURL}/wallet/edit-stock/${username}/${walletId}/${symbol}`,
    {
      sharesNumber: sharesNumber
    },
    {
      headers: {
        'Authorization': `${token}`
      }
    }
  );
};
