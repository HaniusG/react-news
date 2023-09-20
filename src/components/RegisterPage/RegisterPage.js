import { Component } from "react";
import './register-page.css'
export default class RergisterPage extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    imageUrl: '',
    validationErrors: {}
  }

  
  onImageAdd = (e) => {
    this.setState({
      imageUrl: URL.createObjectURL(e.target.files[0]),
    });
  };


  validateEmail = (email) => {
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regExp.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  validatePassword = (password) => {
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (regExp.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }
  
  handleRegister = () => {
    const { username, email, password, imageUrl } = this.state;
    const validationErrors = {}
    if (!email.trim() || !this.validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email.'
    }
    if (!imageUrl.trim()) {
      validationErrors.imageUrl = 'Please add image.'
    }
    if (!password.trim() || !this.validatePassword(password)) {
      validationErrors.password = 'Password must contain letters, numbers and bet at least 6 characters long.'
    }
    if (username.trim().length < 3) {
      validationErrors.username = 'Username is required.'
    }
    if (Object.keys(validationErrors).length === 0) {
      this.props.handleRegistration({ username, email, password, imageUrl })
      this.setState({
        username: '',
        email: '',
        password: '',
        validationErrors: {}
      })
    } else {
      this.setState({ validationErrors })
    }
  }

  

  render() {
    const { username, email, password, validationErrors, imageUrl} = this.state;
    return (
      <div className="register-page-wrapper">
        <h1>Register page</h1>
        
        <div className="register-form">
          <div className="register-input">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="register-input">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          {
            Object.keys(validationErrors).length ? (
              <div className="error-alert">
                <span>{validationErrors.email}</span>
                <span>{validationErrors.password}</span>
                <span>{validationErrors.username}</span>
                <span>{validationErrors.imageUrl}</span>

              </div>
            ) : null
          }
          <img
            className="profilePicture"
            src={imageUrl ? imageUrl:"https://upload.wikimedia.org/wikipedia/commons/2/2c/Default_pfp.svg"}
            alt=""
            accept="image/jpeg image/png image/jpg image/svg"
            id="user-image"
    
          />
          <div className="addImage">
            <label htmlFor="user-image">Add image</label>
            <input type="file" onChange={this.onImageAdd} />
          </div>
          <button
            className="register-btn"
            onClick={this.handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    )
  }
}