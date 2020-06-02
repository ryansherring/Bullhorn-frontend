import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Register from '../Components/Auth/Register';
import Login from '../Components/Auth/Login';
import ProfileContainer from '../Containers/ProfileContainer';
import Game from '../Components/Game/Game'

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/register' component={Register} />
    <Route path='/game' component={Game} />
    <Route
      path='/login'
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
    <Route path='/profile' component={ProfileContainer} />
  </Switch>
);
