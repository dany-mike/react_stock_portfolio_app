import { Card, Typography, CardContent, CardActions } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

export default function SearchedStockList({ companies, price }) {
  const classes = useStyles();
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
            <Link to={`/add-value/${username}/${walletId}/${company.Symbol}`} className={styles.none}>
              <Button
                color="secondary"
                variant="outlined"
                className={styles.mt}
                style={{ margin: 2 }}
              >
                {"Back"}{" "}
              </Button>
            </Link>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
