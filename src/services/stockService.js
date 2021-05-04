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

// export const endOfTheDayPrice = async (symbol) => {
//   let pricePerShare = 0

//   const response = await axios.get(
//     `http://localhost:3000/marketstack/eod-price/${symbol}/`,
//     {
//       withCredentials: true,
//     }
//   );

//   pricePerShare = response.data.data[0].open;

//   console.log(pricePerShare)

//   return pricePerShare
// }