import CompanyItem from "../CompanyItem/CompanyItem";

export default function CompanyList({ data, favorites }) {
  return (
    <>
      {data !== [] &&
        data.map((data) => {
              return (
                <CompanyItem key={data._id} data={data} favorites={favorites} />
              );
        })}
    </>
  );
}
