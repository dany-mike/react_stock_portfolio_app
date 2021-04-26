import { useState, useEffect } from 'react'
import {useHistory, useParams} from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import styles from "./WalletForm.module.css"
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { getWalletById } from '../../services/walletService'
import axios from 'axios'
import {walletByUsernameRequest} from '../../services/walletService'
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function WalletForm(props) {

    const { username } = useParams()
    const { walletId } = useParams()

    const classes = useStyles();

    const [walletForm, setWalletForm] = useState({
        walletName: '',
        description: ''
    })

    useEffect(() => {
            (async () => {
                if(props.url === "http://localhost:3000/wallet/edit-wallet") {
                setWalletForm(await getWalletById(username, walletId))
                }
            })()
    }, [username, walletId, props.url])

    const handleChange = (e) => {
        const { name, value } = e.target;
        // ... keep the values in the form object
        setWalletForm({...walletForm, [name]: value })
    };

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(props.url === "http://localhost:3000/wallet/edit-wallet") {
            await walletByUsernameRequest(username, walletForm, props.url, axios.patch, walletId)
            history.push(`/wallets/${username}`)
        } else {
            await walletByUsernameRequest(username, walletForm, props.url, axios.post, "")
            history.push(`/wallets/${username}`)
        }
    }

    let button

    if(props.url === "http://localhost:3000/wallet/edit-wallet") {
        button = <Button variant="outlined" color="primary" type="submit" >Edit wallet</Button>
    } else {
        button = <Button variant="outlined" color="primary" type="submit" >Add new wallet</Button>
    }

    let title 

    if(props.url === "http://localhost:3000/wallet/edit-wallet") {
        title = <Typography variant="h4" component="h2" className={styles.paddingOne}>Edit Wallet</Typography>
    } else {
        title = <Typography variant="h4" component="h2" className={styles.paddingOne}>Add Wallet</Typography>
    }



    return (
        <Card className={styles.margin}>

            {title}
            <form onSubmit={handleSubmit} className={clsx(styles.marginOne, classes.margin)}>
                <CardContent>
                    <FormControl fullWidth >
                        <InputLabel htmlFor="walletName">Wallet Name</InputLabel>
                        <Input
                            id="walletName"
                            onChange={handleChange}
                            value={walletForm.walletName}
                            name="walletName"
                        />
                    </FormControl>
                    <FormControl fullWidth >
                        <InputLabel htmlFor="description">Description</InputLabel>
                        <Input
                            id="description"
                            onChange={handleChange}
                            value={walletForm.description}
                            name="description"
                        />
                    </FormControl>
                </CardContent>
                <CardActions>
                    {button}
                </CardActions>
            </form>
        </Card>
    )
}