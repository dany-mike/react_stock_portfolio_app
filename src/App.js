import {BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import AddWalletPage from './pages/AddWallet/AddWalletPage';
import EditWalletPage from './pages/EditWallet/EditWalletPage';
import WalletPage from './pages/Wallet/WalletPage'
import SignInPage from './pages/SignIn/SignInPage'
import SignUpPage from './pages/SignUp/SignUpPage'
import {HomePage} from './pages/Home/HomePage'
import NotFound from './components/NotFound/NotFound'

import {useEffect, useState} from 'react'
import {isUser} from './services/authenticationService'

export default function App() {

  const [user, setUser] = useState(false) 

  useEffect(() => {
    (async () => {
      const data = await isUser()
      setUser(data.data)
    })()
  }, [])

  return (
    <Router>
      <Header isLoggedIn={user}/>
      <Switch>
        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
        <Route path='/wallets/:username' exact component={HomePage}/>
        <Route path='/wallet/:username/:walletId' exact component={WalletPage}/>
        <Route exact path='/add-wallet/:username' component={AddWalletPage}/>
        <Route exact path='/edit-wallet/:username/:walletId' component={EditWalletPage}/>
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


