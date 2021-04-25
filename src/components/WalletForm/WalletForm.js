import { useState } from 'react'
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

import {walletByUsernameRequest} from '../../services/walletService'


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function WalletForm({url}) {
    const { username } = useParams()

    const classes = useStyles();

    const [walletForm, setWalletForm] = useState({
        walletName: '',
        description: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        // ... keep the values in the form object
        setWalletForm({...walletForm, [name]: value })
    };

    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        await walletByUsernameRequest(username, walletForm, url)
        history.push(`/wallets/${username}`)
    }

    return (
        <Card className={styles.margin}>
            <form onSubmit={handleSubmit} className={clsx(styles.marginOne, classes.margin)}>
                <CardContent>
                    <FormControl fullWidth >
                        <InputLabel htmlFor="walletName">Wallet Name</InputLabel>
                        <Input
                            id="walletName"
                            onChange={handleChange}
                            value={walletForm.walletName || ''}
                            name="walletName"
                        />
                    </FormControl>
                    <FormControl fullWidth >
                        <InputLabel htmlFor="description">Description</InputLabel>
                        <Input
                            id="description"
                            onChange={handleChange}
                            value={walletForm.description || ''}
                            name="description"
                        />
                    </FormControl>
                </CardContent>
                <CardActions>
                <Button type="submit" >Add new wallet</Button>
                </CardActions>
            </form>
        </Card>
    )
}
