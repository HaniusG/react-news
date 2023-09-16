import { Component } from "react";
import "./user-page.css";
export default class UserPage extends Component {
  state = {
    imageUrl: "",
  };

  onImageAdd = (e) => {
    this.setState({
      imageUrl: URL.createObjectURL(e.target.files[0]),
    });
  };

  render() {
    const { username, email, password } = this.props;
    const { imageUrl } = this.state;
    return (
      <div className="userPage">
        <div className="userPicture">
          <img
            className="profilePicture"
            src={imageUrl}
            alt=""
            accept="image/jpeg image/png image/jpg image/svg"
            id="user-image"
            url={imageUrl}
          />
          <div className="addImage">
            <label htmlFor="user-image">Add image</label>
            <input type="file" onChange={this.onImageAdd} />
          </div>
        </div>

        <div className="userRegisterInfo">
          <p>Username:</p>
          <span>{username}</span>

          <p>Email:</p>
          <span>{email}</span>
          
          <p>Password:</p>
          <span>Password - {password}</span>
        </div>
        
        <button className="continueButton">Continue</button>
      </div>
    );
  }
}
