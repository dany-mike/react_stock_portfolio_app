import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from "./WalletCard.module.css"

const useStyles = makeStyles({
  title: {
    fontSize: 26,
  },
});

export default function WalletCard(props) {
  const classes = useStyles();

  return (
    <Card className={styles.margin}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.walletName}
        </Typography>
        <Typography variant="body2" component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Go to this wallet</Button>
      </CardActions>
    </Card>
  );
}
