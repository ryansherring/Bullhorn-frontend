import React, { Component } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import Routes from './Config/routes';
import Navbarus from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid')
  };

  setCurrentUser = userId => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    localStorage.removeItem('uid');
    axios
      .delete(`${process.env.REACT_APP_API_URL}/auth/logout`, {
        withCredentials: true
      })
      .then(res => {
        console.log(res);
        this.setState({ currentUser: null });
        this.props.history.push('/login');
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <>
        <Navbarus currentUser={this.state.currentUser} logout={this.logout} />
        {/* {routes} */}
        <Routes
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser}
        />
      </>
    );
  }
}

export default withRouter(App);
