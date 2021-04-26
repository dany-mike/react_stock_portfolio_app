import WalletForm from '../../components/WalletForm/WalletForm'
import Container from '@material-ui/core/Container';

export default function AddWalletPage() {
    return (
        <Container>
            <WalletForm url="http://localhost:3000/wallet/add-wallet"/>
        </Container>
    )
}
