import { Card, CardContent, Typography, CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styles from "./AddCompanyIntoWalletForm.module.css";
import { useParams, useHistory } from "react-router-dom";


export default function AddCompanyIntoWalletForm({data, profil}) {
  const history = useHistory();
  const { symbol } = useParams();


  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return <>
    <Card className={styles.margin} variant="outlined">
      <Typography variant="h4" component="h2" className={styles.paddingOne}>
        Add {profil.Name}
      </Typography>
      <Typography variant="h6" component="h2" color='textSecondary' className={styles.paddingOne}>
        Sector: {profil.Sector}
      </Typography>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <Typography
            variant="h6"
            component="h4"
            className={styles.paddingOne}
            style={{ fontWeight: "bold" }}
          >
            Last open: $ {data[99].open} <br/> Last close: $ {data[99].close}
          </Typography>
          <ButtonGroup size="small" aria-label="small outlined button group">
            <Button>+</Button>
            <Button>-</Button>
            {/* <Button onClick={this.handleIncrement}>+</Button>
            {displayCounter && <Button disabled>{this.state.counter}</Button>}
            {displayCounter && (
              <Button onClick={this.handleDecrement}>-</Button>
            )} */}
          </ButtonGroup>
        </CardContent>
        <CardActions>
          <Button variant="outlined" color="primary" type="submit">
            Add {symbol}
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleGoBack}>
            Back
          </Button>
        </CardActions>
      </form>
    </Card>
  </>
}
