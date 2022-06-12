import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Headers/Headers';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import { Container } from 'react-bootstrap';
import Login from './components/Login/Login';
import Deals from './components/Deals/Deals';
import Admin from './components/Admin/Admin';
import Orders from './components/Orders/Orders';
import Checkout from './components/Checkout/Checkout';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckoutItems from './components/CheckoutItems/CheckoutItems';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
     <Container>
      <Router>
        <Switch>

          <Route exact path="/">
            <Headers />
            <Home />
          </Route>

          <Route path="/home">
            <Headers />
            <Home/>
          </Route>

          <PrivateRoute path="/products/:id">
            <Headers />
            <Checkout/>
          </PrivateRoute>

          <PrivateRoute path="/admin">
            <Headers/>
            <Admin />
          </PrivateRoute >

          <PrivateRoute  path="/orders">
            <Headers />
            <Orders />
          </PrivateRoute >

          <Route path="/checkout/:id">
            <Headers />
            <CheckoutItems/>
          </Route>

          <Route path="/deals">
            <Headers />
            <Deals />
          </Route>

          <Route path="/login">
            <Headers />
            <Login />
          </Route>

         

        </Switch>
      </Router>
    </Container>
    </UserContext.Provider>
    
  );
}

export default App;
