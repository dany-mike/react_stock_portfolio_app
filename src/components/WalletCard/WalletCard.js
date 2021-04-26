import { makeStyles} from '@material-ui/core/styles';
import {useHistory, useParams} from "react-router-dom";
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

  const { username } = useParams()
  const history = useHistory()

  const handleClickEdit = (e) => {
    e.preventDefault();
    history.push(`/edit-wallet/${username}/${props._id}`)
}

  return (
    <Card className={styles.margin}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.walletName}
        </Typography>
        <Typography variant="body2" component="p" value="test">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">Go to this wallet</Button>
        <Button variant="outlined" color='primary' onClick={handleClickEdit}>Edit wallet</Button>
        <Button variant="outlined" color='secondary'>Delete Wallet</Button>
      </CardActions>
    </Card>
  );
}
