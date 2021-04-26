import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Header from './components/Header/Header'
import AddWalletPage from './pages/AddWallet/AddWalletPage';
import EditWalletPage from './pages/EditWallet/EditWalletPage';
import {HomePage} from './pages/Home/HomePage'


function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/">
        <Redirect to="/wallets/danymike" />
      </Route>
      <Route path='/wallets/:username' exact component={HomePage}/>
      <Route path='/add-wallet/:username' exact component={AddWalletPage}/>
      <Route path='/edit-wallet/:username/:walletId' exact component={EditWalletPage}/>
    </Router>
  );
}

export default App;
