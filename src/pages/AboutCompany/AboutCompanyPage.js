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
import {getStockPricesBySymbol, getStockNameBySymbol} from "../../services/stockService"
import Circular from "../../components/Circular/Circular";
import CompanyDescriptionCard from "../../components/CompanyDescriptionCard/CompanyDescriptionCard";

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
  const [prices, setPrices] = useState([]);
  const [profil, setProfil] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const { username } = useParams();
  const { walletId } = useParams();
  const { symbol } = useParams();

  useEffect(() => {
    (async () => {
      try {
        setCompany(await getCompanyBySymbol(username, walletId, symbol));
        const prices = await getStockPricesBySymbol(symbol);
        const stockName = await getStockNameBySymbol(symbol);
        setProfil(stockName);
        setPrices(prices.reverse());
        setLoading(false);
      } catch (err) {
        history.push("/signin");
      }
    })();
  }, [username, walletId, history, symbol]);

  const goBack = () => {
    history.goBack();
  };

  let spinner;
  let content;

  let priceTimeShares = company.sharesNumber * company.stockPrice;

  if (loading === true) {
    spinner = <Circular />;
  } else {
    content = (
      <div>
        <Typography variant="h3">{company.companyName}</Typography>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
                  ${priceTimeShares.toFixed(2)}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <CompanyDescriptionCard data={prices} profil={profil}/>
          </Grid>
        </Grid>
      </div>
    );
  }

  return (
    <Container className={styles.marginTop}>
      {content}
      {spinner}
      <Button
        color="secondary"
        variant="outlined"
        onClick={goBack}
        className={styles.mt}
        style={{ margin: 2 }}
      >
        {"Back"}{" "}
      </Button>
    </Container>
  );
}
