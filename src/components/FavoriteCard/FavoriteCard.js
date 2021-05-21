import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./FavoriteCard.module.css";
import { removeFavorite } from "../../services/favoriteService";
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    fontSize: 26,
  },
});

export default function FavoriteCard({ data }) {
  const { username } = useParams();

  const handleRemove = async () => {
    const confirm = window.confirm(
      `Are you sure to delete ${data.symbol} from your favorite`
    );

    if (confirm === true) {
      await removeFavorite(username, data.symbol)
      document.location.reload()
    }
  };

  const classes = useStyles();
  return (
    <Card className={styles.margin} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {data.companyName}
        </Typography>
        <Typography variant="body2" component="p" value="test">
          Stock price: ${data.stockPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" color="secondary" onClick={handleRemove}>
          Remove favorite
        </Button>
      </CardActions>
    </Card>
  );
}
