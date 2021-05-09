import CompanyItem from "../CompanyItem/CompanyItem";

export default function CompanyList({ datas }) {

  return (
    <>
      {datas !== [] &&
        datas.map((data) => (
          <CompanyItem
            key={data._id}
            companyName={data.companyName}
            symbol={data.symbol}
            stockPrice={data.stockPrice}
            forecastPrice={data.forecastPrice}
            sharesNumber={data.sharesNumber}
            activityArea={data.activityArea}
          />
        ))}
    </>
  );
}
