import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Header from "./components/Header/Header";
import AddWalletPage from "./pages/AddWallet/AddWalletPage";
import EditWalletPage from "./pages/EditWallet/EditWalletPage";
import WalletPage from "./pages/Wallet/WalletPage";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import { HomePage } from "./pages/Home/HomePage";
import NotFound from "./components/NotFound/NotFound";
import AboutCompanyPage from "./pages/AboutCompany/AboutCompanyPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import AddValuePage from "./pages/AddValue/AddValuePage";
import EditCompanyPage from "./pages/EditCompany/EditCompanyPage";

import { useEffect, useState } from "react";
import { isUser } from "./services/authenticationService";
import { Provider } from "react-redux";
import store from './store'

export default function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await isUser();
      setUser(data.data);
    })();
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Header isLoggedIn={user} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/signin" />
          </Route>
          <Route path="/wallets/:username" exact component={HomePage} />
          <Route
            path="/wallet/:username/:walletId"
            exact
            component={WalletPage}
          />
          <Route
            path="/about-company/:username/:walletId/:symbol"
            exact
            component={AboutCompanyPage}
          />
          <Route exact path="/add-wallet/:username" component={AddWalletPage} />
          <Route
            exact
            path="/edit-wallet/:username/:walletId"
            component={EditWalletPage}
          />
          <Route exact path="/wallets/:username" component={HomePage} />
          <Route
            path="/search-page/:username/:walletId"
            component={SearchPage}
          />
          <Route
            path="/add-value/:username/:walletId/:symbol"
            component={AddValuePage}
          />
          <Route
            path="/edit-company/:username/:walletId/:symbol"
            component={EditCompanyPage}
          />
          <Route
            path="/signin"
            component={() => <SignInPage isLoggedIn={user} />}
          />
          <Route path="/signup" component={SignUpPage} />
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
