import React, { Component } from "react";
import axios from "axios";

import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import FrontPage from "./FrontPage";

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      isAuthenticated: false,
      user: '',
      errorMessage: ''
    }
    this.verifyToken = this.verifyToken.bind(this)
  }

  verifyToken() {
    axios('/verifytoken')
      .then(res => {
        this.setState({
          isLoading: false,
          isAuthenticated: true,
          user: res.data.user
        })
      })
      .catch(err => {
        this.setState({
          isLoading: false,
          isAuthenticated: false,
          errorMessage: err.response.data.msg
        })
      })
  }

  componentDidMount() {
    this.verifyToken()
  }

  render() {
    return (
      !this.state.isLoading &&
      <div>
        <NavBar verify={this.verifyToken} isAuthenticated={this.state.isAuthenticated} />
        {this.state.isAuthenticated === false ?
          <div>
            <LoginForm verify={this.verifyToken} />
          </div> :
          <div><FrontPage /></div>
        }
      </div>
    );
  }
}

export default App;