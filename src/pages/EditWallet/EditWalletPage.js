import WalletForm from '../../components/WalletForm/WalletForm'
import Container from '@material-ui/core/Container';

export default function EditWalletPage() {
    return (
        <Container>
            <WalletForm url="https://stock-portfolio-app-api.herokuapp.com/wallet/edit-wallet"/>
        </Container>
    )
}
