import { useState } from "react";
import "./app.css";
import RegisterPage from "../RegisterPage";
import UserPage from "../UserPage";
import DarkThemeToggle from "../DarkThemeToggle";
// import {FCount, Count} from "../Count";
import LocalStorageService from "../../services/LocalStorageService"
import Test1 from "../Test1/Test1";

function App() {
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
      <DarkThemeToggle>
        {isRegistered ?

          <UserPage userData={userData} />
          :
          <RegisterPage
            handleRegistration={handleRegistration}
          />
        }
      </DarkThemeToggle>

      {/* <Count/>
        <FCount/> */}
      <Test1>
        <h1>Hello</h1>
        <p>Hi</p>
      </Test1>
    </div>
  );
}


export default App;
