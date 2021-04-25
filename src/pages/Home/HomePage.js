import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getWalletsByUsername} from '../../services/walletService'
import WalletList from '../../components/WalletList/WalletList'
import Container from '@material-ui/core/Container';

export const HomePage = () => {

    const [wallets, setWallets] = useState([])
    const { username } = useParams()
    
    useEffect(() => {
        (async () => {
            setWallets(await getWalletsByUsername(username))
        })()
    }, [username])

    return (
            <Container>
                <WalletList wallets={wallets}/>
            </Container>
    )
}