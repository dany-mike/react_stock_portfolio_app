import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getCompanyBySymbol, editStock } from "../../services/stockService";
import styles from "./EditCompanyForm.module.css";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Circular from "../Circular/Circular";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function EditCompanyForm() {
  const history = useHistory();
  const { username } = useParams();
  const { walletId } = useParams();
  const { symbol } = useParams();
  const [loading, setLoading] = useState(true);

  const classes = useStyles();

  const [sharesNumber, setSharesNumber] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [cSymbol, setCSymbol] = useState("");

  useEffect(() => {
    (async function () {
      const response = await getCompanyBySymbol(username, walletId, symbol);
      setSharesNumber(response.sharesNumber);
      setCSymbol(response.symbol);
      setCompanyName(response.companyName);
      setLoading(false);
    })();
  }, [username, walletId, symbol]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editStock(username, walletId, symbol, sharesNumber);
    history.goBack();
  };

  const handleIncrement = () => {
    setSharesNumber(sharesNumber + 1);
  };

  const handleDecrement = () => {
    setSharesNumber(sharesNumber - 1);
  };

  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  const displayCounter = sharesNumber > 0;

  let spinner;
  let content;

  if (loading === true) {
    spinner = <Circular />;
  } else {
    content = (
      <Card className={styles.margin} variant="outlined">
        <Typography variant="h4" style={{ padding: 10 }}>
          Edit {companyName}
        </Typography>
        <form
          onSubmit={handleSubmit}
          className={clsx(styles.marginOne, classes.margin)}
        >
          <CardContent>
            <Typography
              variant="h6"
              component="h6"
              style={{ fontWeight: "bold" }}
            >
              Shares number {sharesNumber}
            </Typography>
            <br />
            <ButtonGroup size="small" aria-label="small outlined button group">
              <Button onClick={handleIncrement}>+</Button>
              {displayCounter && <Button disabled>{sharesNumber}</Button>}
              {displayCounter && <Button onClick={handleDecrement}>-</Button>}
            </ButtonGroup>
          </CardContent>
          <CardActions>
            <Button variant="outlined" color="primary" type="submit">
              Edit {cSymbol}
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleGoBack}>
              Back
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }

  return (
    <>
      {spinner}
      {content}
    </>
  );
}
