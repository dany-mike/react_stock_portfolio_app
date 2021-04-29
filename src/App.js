import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Header from './components/Header/Header'
import AddWalletPage from './pages/AddWallet/AddWalletPage';
import EditWalletPage from './pages/EditWallet/EditWalletPage';
import SignInPage from './pages/SignIn/SignInPage'
import SignUpPage from './pages/SignUp/SignUpPage'
import {HomePage} from './pages/Home/HomePage'
import TestComponent from './components/Test/TestComponent';


function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/">
        <Redirect to="/signin"/>
      </Route>
      <Route exact path="/wallets" component={TestComponent}>
        <Redirect to="/signin"/>
      </Route>
      <Route path='/signin' exact component={SignInPage}/>
      <Route path='/signup' exact component={SignUpPage}/>
      <Route path='/wallets/:username' exact component={HomePage}/>
      <Route path='/add-wallet/:username' exact component={AddWalletPage}/>
      <Route path='/edit-wallet/:username/:walletId' exact component={EditWalletPage}/>
    </Router>
  );
}

export default App;
