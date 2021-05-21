import { Card, CardActions, Button } from "@material-ui/core";
import LineChart from "../LineChart/LineChart";

export default function CompanyDescriptionCard({ data, profil }) {
  
  const onCheckPrice = (e) => {
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
          onClick={onCheckPrice}
        >
          Check detailed price
        </Button>
      </CardActions>
    </Card>
  );
}
