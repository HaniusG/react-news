import { Component } from "react";
import "./app.css";
import RegisterPage from "../RegisterPage";
import UserPage from "../UserPage";

class App extends Component {
  state = {
    isRegistered: false,
    userData: {}
  };

  handleRegistration = (userData) => {
    this.setState({
        userData,
        isRegistered: true,
  })
};

  render() {
    const { userData, isRegistered } = this.state;
    
   

    return (
      <div className="app">
        {isRegistered ? 
        
        <UserPage userData={userData}/>
        :
        <RegisterPage
          handleRegistration={this.handleRegistration}
        />
        }
      </div>
    );
  }
}

export default App;
