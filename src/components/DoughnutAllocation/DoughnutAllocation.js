import { Button, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import {useState} from "react"

export default function DoughnutAllocation({ dataAlloc }) {
  const [isPerc ,setIsPerc] = useState(true);

  const switchAlloc = () => {

    if(isPerc) {
      setIsPerc(false)
    }

    if(!isPerc) {
      setIsPerc(true)
    }

  }

  const dataPercentage = {
    labels: dataAlloc.map((d) => {
      return d.sectorName;
    }),
    datasets: [
      {
        label: "% ",
        data: dataAlloc.map((d) => {
          return `${d.investPerc}`;
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const dataMoney = {
    labels: dataAlloc.map((d) => {
      return d.sectorName;
    }),
    datasets: [
      {
        label: "$",
        data: dataAlloc.map((d) => {
          return d.moneyInvested;
        }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Typography variant="h4">{isPerc ? "Sector allocation %" : "Sector allocation $"}</Typography>
      <Button variant="outlined" onClick={switchAlloc}>{isPerc ? "Check $Allocation" : "Check %Allocation"}</Button>
      {
      isPerc ? <Doughnut data={dataPercentage} style={{ margin: "3%" }} /> 
      : 
      <Doughnut data={dataMoney} style={{ margin: "3%" }} /> 
      }
    </>
  );
}
