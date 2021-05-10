import axios from "axios";

const baseURL = "http://localhost:3000"

export const getCompanyBySymbol = async (username, walletId, symbol) => {
  let company;

  const response = await axios.get(
    `${baseURL}/wallet/get-stock/${username}/${walletId}/${symbol}`,
    {
      withCredentials: true,
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
      withCredentials: true,
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
      withCredentials: true,
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
      withCredentials: true,
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
      withCredentials: true,
    }
  );
};

export const deleteStockInWallet = async (username, walletId, symbol) => {
  await axios.delete(
    `${baseURL}/wallet/delete-stock/${username}/${walletId}/${symbol}`,
    {
      withCredentials: true,
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
      withCredentials: true,
    }
  );
};
