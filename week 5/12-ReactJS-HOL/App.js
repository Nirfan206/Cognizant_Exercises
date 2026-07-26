import React, { Component } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

class App extends Component {

  constructor() {
    super();

    this.state = {
      isLoggedIn: false
    };
  }

  login = () => {
    this.setState({ isLoggedIn: true });
  };

  logout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {

    return (

      <div style={{ textAlign: "center", marginTop: "30px" }}>

        <h1>Ticket Booking Application</h1>

        {
          this.state.isLoggedIn ?

            <div>
              <UserPage />
              <button onClick={this.logout}>Logout</button>
            </div>

            :

            <div>
              <GuestPage />
              <button onClick={this.login}>Login</button>
            </div>

        }

      </div>

    );

  }

}

export default App;
