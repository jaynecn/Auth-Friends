import React from 'react';
import logo from './logo.svg';
import { Route, NavLink, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import Login from './Login';
import { FriendsList } from './FriendsList';

function App() {
  return (
    <div className="App">
      App
      <Route exact path="/" component={Login} />
      <PrivateRoute path="/friends" component={FriendsList} />
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

export default App;
