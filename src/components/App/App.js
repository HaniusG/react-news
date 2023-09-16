import { Component, useCallback } from "react";
import "./app.css";
import RegisterPage from "../RegisterPage";
import UserPage from "../UserPage";

class App extends Component {
  state = {
    newUsername: "",
    newEmail: "",
    newPassword: "",
    isClicked: false,
  };

  handleRegister = (username, email, password) => {
    this.setState({
        newUsername: username,
        newEmail: email,
        newPassword: password,
        isClicked: true
    });
  };

  render() {
    const { newUsername, newEmail, newPassword, isClicked } = this.state;
    
    return (
      <div className="app">
        {isClicked && newUsername && newEmail && newPassword ? 
        <UserPage username={newUsername} email={newEmail} password={newPassword}/>
        :
        <RegisterPage
          handleRegister={this.handleRegister}
        />
        }
      </div>
    );
  }
}

export default App;
