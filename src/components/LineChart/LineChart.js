import { Line } from "react-chartjs-2";
import styles from './LineChart.module.css'

const LineChart = ({ prices, profil}) => {

  const data = {
    labels: prices.map(price => price.date),
    datasets: [
      {
        label: `Price ${profil.Symbol}`,
        data:prices.map(price => price.close),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <>
      <div className="header">
        <h1 className={styles.paddingOne}>{profil.Symbol} last 100 days (at close)</h1>
      </div>
      <Line data={data} options={options} className={styles.paddingOne}/>
    </>
  );
};

export default LineChart;
