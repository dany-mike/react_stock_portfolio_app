import {
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./FavoriteCard.module.css";

const useStyles = makeStyles({
  title: {
    fontSize: 26,
  },
});

export default function FavoriteCard({ data }) {
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
        <CardActions></CardActions>
      </Card>
  );
}
