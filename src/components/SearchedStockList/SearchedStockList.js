import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useParams, useHistory } from "react-router-dom";
import styles from "./SearchedStockList.module.css";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 21,
  },
  pos: {
    marginBottom: 12,
  },
  posT: {
    marginTop: 12,
  },
  subtitle: {
    fontSize: 32,
    fontWeight: "bold",
  },
});

export default function SearchedStockList({ companies }) {
  const classes = useStyles();
  const { username } = useParams();
  const { walletId } = useParams();
  const history = useHistory();

  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack()
  }

  return (
    <>
      {companies.map((company) => (
        <Card className={classes.posT} variant="outlined" key={company._id}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {company.Name} | {company.Symbol} | {company.Sector}
            </Typography>
          </CardContent>
          <CardActions>
            <Link
              to={`/add-value/${username}/${walletId}/${company.Symbol}`}
              className={styles.none}
            >
              <Button
                color="primary"
                variant="outlined"
                className={styles.mt}
                style={{ margin: 2 }}
              >
                {"Add this value"}{" "}
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
        <Button
          onClick={handleGoBack}
          color="secondary"
          variant="outlined"
          className={styles.mt}
          style={{ margin: 2 }}
        >
          {"Back"}{" "}
        </Button>
    </>
  );
}
