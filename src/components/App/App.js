import { Component } from "react";
import "./app.css";
import RegisterPage from "../RegisterPage";
import UserPage from "../UserPage";
import { setUserData, getUserData, setIsRegistered , getIsRegistered} from "../../services/LocalStorageService";

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
  setUserData(userData);
  setIsRegistered(true);
  console.log(getIsRegistered()==="true");
  
};

  render() {
    const { userData, isRegistered } = this.state;
    
   

    return (
      <div className="app">
        {getIsRegistered()==="true"? 
        
        <UserPage userData={isRegistered ? userData: getUserData()}/>
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
