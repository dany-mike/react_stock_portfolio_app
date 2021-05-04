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

  return company
};

export const companyProfileBySymbol = async (symbol) => {
  let companyInfo

  const response = await axios.get(
    `http://localhost:3000/fm-api/profile/${symbol}`,
    {
      withCredentials: true,
    }
  );

  companyInfo = response.data;

  return companyInfo
}