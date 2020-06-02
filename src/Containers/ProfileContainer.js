import React, { Component } from 'react';
import Profile from '../Components/Profile/Profile';
import axios from 'axios';

class ProfileContainer extends Component {
  state = {
    profile: {},
  }

  componentDidMount() {
    const userId = localStorage.getItem('uid');
    axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res);
        this.setState({
          profile: res.data.data
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return <Profile profile={this.state.profile} />
  }
}

export default ProfileContainer;
