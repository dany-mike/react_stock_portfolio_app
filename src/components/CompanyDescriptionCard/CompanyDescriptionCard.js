import { Card, CardActions, Button } from "@material-ui/core";
import LineChart from "../LineChart/LineChart";

export default function CompanyDescriptionCard({ data, profil }) {
  const onCheckHistoricalPrice = (e) => {
    e.preventDefault();
    window.open(
      `https://www.nasdaq.com/market-activity/stocks/${profil.Symbol}`,
      "_blank"
    );
  };

  return (
    <Card style={{ marginBottom: 50 }} variant="outlined">
      <LineChart prices={data} profil={profil} />
      <CardActions>
        <Button
          variant="outlined"
          onClick={onCheckHistoricalPrice}
        >
          1 Day
        </Button>
        <Button
          variant="outlined"
          onClick={onCheckHistoricalPrice}
        >
          5 Days
        </Button>
        <Button
          variant="outlined"
          onClick={onCheckHistoricalPrice}
        >
          1 Month
        </Button>
        <Button
          variant="outlined"
          onClick={onCheckHistoricalPrice}
        >
          6 Month
        </Button>
        <Button
          variant="outlined"
          onClick={onCheckHistoricalPrice}
        >
          1 Year
        </Button>
        <Button
          variant="outlined"
          onClick={onCheckHistoricalPrice}
        >
          5 Y
        </Button>
        <Button
          variant="outlined"
          onClick={onCheckHistoricalPrice}
        >
          Max
        </Button>
      </CardActions>
    </Card>
  );
}
