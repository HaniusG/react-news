import { Component } from "react";
import './register.css'

class Register extends Component {
    
    state = {
        username: "",
        email: "",
        password: "",
    }

    onInputChange = ( e, input ) => {
        this.setState(({ username, email, password}) => {
          if(input==="username"){
            return {
                username: e.target.value
            }
          }else if(input==="email"){
            return {
                email: e.target.value
            }
          }else{
            return {
                password: e.target.value
            }
          }
        })
      }

      onLogIn = ( ) => {
        this.setState(({ username, email, password}) => {
          console.log(username, email, password);
        })
      }

    render() {
        const {username, email, password} = this.state;
        return (
            <div className="formDiv">
                <h1>Registration</h1>
                 <form className = "form">
                <div>
                    <span>Username</span>
                    <input type="text" value={username} onChange={e => this.onInputChange(e, 'username')}/>
                </div>
                <div>
                    <span>Email</span>
                    <input type="text" value={email} onChange={e => this.onInputChange(e, 'email')}/>
                </div>
                <div>
                    <span>Password</span>
                    <input type="text" alue={password} onChange={e => this.onInputChange(e, 'password')}/>
                </div>
            </form>
            <button onClick={this.onLogIn}>Log in</button> 
            </div>
        )
    }
}

export default Register;