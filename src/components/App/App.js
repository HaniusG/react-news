import { Component, useState } from "react";
import "./app.css";
import RegisterPage from "../RegisterPage";
import UserPage from "../UserPage";
import {FCount, Count} from "../Count";
import { setUserDat, getUserData, setIsRegister , getIsRegistered} from "../../services/LocalStorageService";

function App () {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userData, setUserData] = useState({});




 const handleRegistration = (userData) => {
  setUserDat(userData);
  setIsRegister(true);
  setUserData(userData);
  setIsRegistered(true);
};




    
   

    return (
      <div className="app">
        {getIsRegistered()==="true"? 
        
        <UserPage userData={isRegistered ? userData: getUserData()}/>
        :
        <RegisterPage
          handleRegistration={handleRegistration}
          imageUrl = {userData.imageUrl}
        />
        }
        {/* <Count/>
        <FCount/> */}
      </div>
    );
  }


export default App;
