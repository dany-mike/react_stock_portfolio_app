import { Card, CardContent, Typography, CardActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import styles from './AddCompanyIntoWalletForm.module.css'


export default function AddCompanyIntoWalletForm() {
  const handleSubmit = () => {};

  const handleGoBack = () => {};

  return (
    <>
      <Card className={styles.margin} variant="outlined">
        <Typography variant="h4" component="h2" className={styles.paddingOne}>
          Add this company in your Wallet
        </Typography>
        <form onSubmit={handleSubmit}>
          <CardContent>
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
            <Button variant="outlined" color="secondary" onClick={handleGoBack}>
              Back
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
}
