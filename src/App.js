import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import AddWalletPage from './pages/AddWallet/AddWalletPage';
import EditWalletPage from './pages/EditWallet/EditWalletPage';
import SignInPage from './pages/SignIn/SignInPage'
import SignUpPage from './pages/SignUp/SignUpPage'
import {HomePage} from './pages/Home/HomePage'
import NotFound from './components/NotFound/NotFound'

export default function App() {

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
        <Route path='/wallets/:username' exact component={HomePage}/>
        <Route exact path='/add-wallet/:username' component={AddWalletPage}/>
        <Route exact path='/edit-wallet/:username/:walletId' component={EditWalletPage}/>
        {/* <Route path='/testpage' exact component={IsAuth}/> */}
        <Route exact path='/wallets/:username' component={HomePage} />
        <Route path='/signin' component={SignInPage}/>
        <Route path='/signup' component={SignUpPage}/>
        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  )
}


