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

  const response = await axios.get(`http://localhost:3000/marketstack/eod-price/${symbol}/`)

  aPrices = response.data.data

  return aPrices
}

export const getStockNameBySymbol = async (symbol) => {
  let stockName;

  const response = await axios.get(`http://localhost:3000/search/company-name/${symbol}`)

  stockName = response.data

  return stockName
}
