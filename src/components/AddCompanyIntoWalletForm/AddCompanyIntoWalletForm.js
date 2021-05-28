import { Card, CardContent, Typography, CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styles from "./AddCompanyIntoWalletForm.module.css";
import { useParams, useHistory } from "react-router-dom";
import { useState } from "react";
import { addStockIntoWallet } from "../../services/stockService";
import Alert from "@material-ui/lab/Alert";
import { addFavorite } from "../../services/favoriteService";

export default function AddCompanyIntoWalletForm({ data, profil, wallet }) {
  const history = useHistory();
  const { symbol } = useParams();
  const { walletId } = useParams();
  const { username } = useParams();
  const [sharesNumber, setSharesNumber] = useState(0);
  const [res, setRes] = useState({});
  const [error, setError] = useState({});

  const handleIncrement = () => {
    setSharesNumber(sharesNumber + 1);
  };

  const addFav = async () => {
    try {
      setRes(await addFavorite(username, symbol));
    } catch (err) {
      setError(err.response);
    }
  };

  const handleDecrement = () => {
    setSharesNumber(sharesNumber - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStockIntoWallet(symbol, walletId, username, sharesNumber)
      .then((res) => {
        setRes(res)
      }).catch((err) => {
        setError(err.response)
      })
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const displayCounter = sharesNumber > 0;
  let alert;

  if (res.status === 200) {
    alert = (
      <Alert severity="success" className={styles.marginTopOne}>
        {res.data}
      </Alert>
    );
  }

  if (error.status >= 400 && error.status <= 404) {
    alert = (
      <Alert severity="error" className={styles.marginTopOne}>
        {error.data}
      </Alert>
    );
  }

  return (
    <>
      <Card className={styles.margin} variant="outlined">
        <Typography variant="h4" component="h2" className={styles.paddingOne}>
          Add {profil.Name}
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          color="textSecondary"
          className={styles.paddingOne}
        >
          Sector: {profil.Sector}
        </Typography>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <Typography
              variant="h5"
              component="h4"
              className={styles.paddingOne}
              style={{ fontWeight: "bold" }}
            >
              Last open: $ {data[99].open} <br /> Last close: $ {data[99].close}
            </Typography>
            <Typography
              variant="h6"
              component="h6"
              className={styles.paddingOne}
              style={{ fontWeight: "bold" }}
            >
              Shares number {sharesNumber}
            </Typography>
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button onClick={handleIncrement}>+</Button>
              {displayCounter && <Button disabled>{sharesNumber}</Button>}
              {displayCounter && <Button onClick={handleDecrement}>-</Button>}
            </ButtonGroup>
          </CardContent>
          <CardActions>
            <Button variant="outlined" color="primary" type="submit">
              Add {symbol}
            </Button>
            <Button
              variant="outlined"
              onClick={addFav}
              style={{ color: "#815cff" }}
            >
              Add {symbol} into fav
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleGoBack}>
              Back
            </Button>
          </CardActions>
        </form>
        {alert}
      </Card>
    </>
  );
}
