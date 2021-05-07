import { makeStyles} from '@material-ui/core/styles';
import {useHistory, useParams} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from "./WalletCard.module.css"
import {useState, useEffect} from 'react'
import {deleteWalletByWalletId, getWalletById} from '../../services/walletService'

const useStyles = makeStyles({
  title: {
    fontSize: 26,
  },
});


export default function WalletCard(props) {

  const classes = useStyles();

  const { username } = useParams()
  const history = useHistory()

  const [deleteWallet, setDeleteWallet] = useState(false)

  useEffect(() => {
    if(deleteWallet) {
      (async () => {
        let isConfirm = window.confirm('Are you sure to delete this wallet?')
        if(isConfirm) {
          await deleteWalletByWalletId(username, props._id)
          document.location.reload();
        }
      })()
    }
}, [deleteWallet, props._id, username, history])

  const handleGoWallet = async (e) => {
    e.preventDefault()
    const walletData = await getWalletById(username, props._id)
    history.push(`/wallet/${username}/${props._id}?walletName=${walletData.walletName}`)
  }

  const handleClickEdit = (e) => {
    e.preventDefault();
    history.push(`/edit-wallet/${username}/${props._id}`)
  }

  const handleClickDelete = async (e) => {
    e.preventDefault();
    setDeleteWallet(true)
  }

  return <>
    <Card className={styles.margin} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {props.walletName}
        </Typography>
        <Typography variant="body2" component="p" value="test">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" onClick={handleGoWallet}>Go to this wallet</Button>
        <Button variant="outlined" color='primary' onClick={handleClickEdit}>Edit wallet</Button>
        <Button variant="outlined" color='secondary' onClick={handleClickDelete}>Delete Wallet</Button>
      </CardActions>
    </Card>
  </>
}
