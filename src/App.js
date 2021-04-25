import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import Header from './components/Header/Header'
import {HomePage} from './pages/Home/HomePage'

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path="/">
        <Redirect to="/wallets/danydany" />
      </Route>
      <Route path='/wallets/:username' exact component={HomePage}/>
    </Router>
  );
}

export default App;
