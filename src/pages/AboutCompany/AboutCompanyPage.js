import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Button, Container } from "@material-ui/core";
import styles from "./AboutCompanyPage.module.css";
import { useParams, useHistory } from "react-router-dom";
import { getCompanyBySymbol } from "../../services/stockService";
import { useState, useEffect } from "react";
import Circular from "../../components/Circular/Circular";
import {useLocation, Link} from "react-router-dom";

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
});

export default function AboutCompanyPage() {
  const classes = useStyles();

  const [company, setCompany] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const { username } = useParams();
  const { walletId } = useParams();
  const { symbol } = useParams();

  const search = useLocation().search;
  const walletName = new URLSearchParams(search).get('walletName');

  useEffect(() => {
    (async () => {
      try {
        setCompany(await getCompanyBySymbol(username, walletId, symbol));
        setLoading(false)
      } catch (err) {
        history.push('/signin')
      }
    })();
  }, [username, walletId, history, symbol]);

    let spinner
    let content 

    if(loading === true) {
        spinner = <Circular/>
    } else {
        content = <div><Typography variant="h3">{company.companyName}</Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  About {company.companyName}
                </Typography>
                <Typography variant="body2" component="p">
                  {company.about}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  My investment at {company.symbol}
                </Typography>
                <Typography variant="h4" component="h2">
                  ${company.sharesNumber * company.stockPrice}
                </Typography>
                <hr />
                <Grid container spacing={3}>
                  <Grid item xs={6}>
                    <Typography variant="h5">$1</Typography>
                    <Typography color="textSecondary" component="p">
                      Invested
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h5">$1</Typography>
                    <Typography color="textSecondary" component="p">
                      G/L
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid></div>
    }

  return (
    <Container className={styles.marginTop}>
      {content}
      {spinner}
      <Link to={`/wallet/${username}/${walletId}?walletName=${walletName}`} className={styles.none}>
        <Button color="secondary" variant="outlined" className={styles.mt} style={{margin: 2}}>
          {"Back"}{" "}
        </Button>
      </Link>
    </Container>
  );
}
