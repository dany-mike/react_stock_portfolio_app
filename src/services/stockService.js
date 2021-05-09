import axios from "axios";

export const getCompanyBySymbol = async (username, walletId, symbol) => {
  let company;

  const response = await axios.get(
    `http://localhost:3000/wallet/get-stock/${username}/${walletId}/${symbol}`,
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
    `http://localhost:3000/search?name=${nameValue}`,
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
    `http://localhost:3000/marketstack/eod-price/${symbol}/`,
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
    `http://localhost:3000/search/company-name/${symbol}`,
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
    `http://localhost:3000/wallet/add-stock/${username}/${walletId}/${symbol}`,
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
    `http://localhost:3000/wallet/delete-stock/${username}/${walletId}/${symbol}`,
    {
      withCredentials: true,
    }
  );
};

export const editStock = async (username, walletId, symbol, sharesNumber) => {
  return await axios.patch(
    `http://localhost:3000/wallet/edit-stock/${username}/${walletId}/${symbol}`,
    {
      sharesNumber: sharesNumber
    },
    {
      withCredentials: true,
    }
  );
};
