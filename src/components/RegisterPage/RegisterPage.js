import { useState } from "react";
import './register-page.css'
export default function RergisterPage (props) {
 


  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [validationErrors, setValidateErrors] = useState({})

  const onImageAdd = (e) => {
    setImageUrl(URL.createObjectURL(e.target.files[0]))
  };


  const validateEmail = (email) => {
    const regExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (regExp.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  const validatePassword = (password) => {
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (regExp.test(password)) {
      return true;
    } else {
      return false;
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name==="username") {
      setUsername(value)
    }else if(name==="email") {
      setEmail(value)
    }else if(name==="password"){
      setPassword(value)
    }
  }
  
  const handleRegister = () => {
  
    const validationErrors = {}
    if (!email.trim() || !validateEmail(email)) {
      validationErrors.email = 'Please enter a valid email.'
    }
    if (!imageUrl.trim()) {
      validationErrors.imageUrl = 'Please add image.'
    }
    if (!password.trim() || !validatePassword(password)) {
      validationErrors.password = 'Password must contain letters, numbers and bet at least 6 characters long.'
    }
    if (username.trim().length < 3) {
      validationErrors.username = 'Username is required.'
    }
    if (Object.keys(validationErrors).length === 0) {
      props.handleRegistration({ username, email, password, imageUrl })
      setUsername('')
      setEmail('')
      setPassword('')
      setValidateErrors({})
    } else {
      setValidateErrors(validationErrors)
    }
  }


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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
            <input type="file" onChange={onImageAdd} />
          </div>
          <button
            className="register-btn"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
    )
  }