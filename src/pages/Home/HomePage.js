import {useEffect, useState} from 'react'
import { useParams, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import {getWalletsByUsername} from '../../services/walletService'
import WalletList from '../../components/WalletList/WalletList'
import Container from '@material-ui/core/Container';
import styles from './HomePage.module.css'

export const HomePage = () => {

    const [wallets, setWallets] = useState([])
    const { username } = useParams()
    const history = useHistory()
    
    useEffect(() => {
        (async () => {
            try {
                setWallets(await getWalletsByUsername(username))
            } catch(err) {
                history.push('/signin')
            }
        })()
    }, [username, history])

    const handleClickCreate = (e) => {
        e.preventDefault();
        history.push(`/add-wallet/${username}/`)
    }

    return (
            <Container>
                <WalletList wallets={wallets}/>
                <Button className={styles.margin} variant="contained" color="primary" onClick={handleClickCreate}>
                    Create a new wallet
                </Button>
            </Container>
    )
}
