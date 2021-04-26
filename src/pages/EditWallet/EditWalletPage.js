import WalletForm from '../../components/WalletForm/WalletForm'
import Container from '@material-ui/core/Container';

export default function EditWalletPage() {
    return (
        <Container>
            <WalletForm url="http://localhost:3000/wallet/edit-wallet"/>
        </Container>
    )
}
