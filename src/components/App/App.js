import { useState } from "react";
import "./app.css";
import RegisterPage from "../RegisterPage";
import UserPage from "../UserPage";
import {FCount, Count} from "../Count";
import LocalStorageService from "../../services/LocalStorageService"

function App () {
  const storageData = LocalStorageService.getUserData()
  const [isRegistered, setIsRegistered] = useState(!!storageData);
  const [userData, setUserData] = useState(storageData);




 const handleRegistration = (userData) => {
  LocalStorageService.saveUserData(userData);

  setUserData(userData);
  setIsRegistered(true);
};




    
   

    return (
      <div className="app">
        {isRegistered ? 
        
        <UserPage userData={userData}/>
        :
        <RegisterPage
          handleRegistration={handleRegistration}
        />
        }
        {/* <Count/>
        <FCount/> */}
      </div>
    );
  }


export default App;
