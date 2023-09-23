import "./user-page.css";
export default function UserPage (props) {

    const { username, email, password, imageUrl } = props.userData;
    return (
      <div className="userPage">
        <div className="userPicture">
          <img
            className="profilePicture"
            src={imageUrl}
            alt=""
            accept="image/jpeg image/png image/jpg image/svg"
            id="user-image"
          />
          <h1>{username}</h1>
        </div>

        <div className="userRegisterInfo">
          
          <h1>Personal Info</h1>

          <p>Email:</p>
          <span>{email}</span>
          
          <p>Password:</p>
          <span>{password}</span>
        </div>
        
        <button className="continueButton">Continue</button>
      </div>
    );
  }

