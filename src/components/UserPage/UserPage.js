import { Component } from "react";
import './user-page.css';
export default class UserPage extends Component {


 

  render() {
    const { username, email, password } = this.props;
    return (
      <div className="userPage"> 
        <span>
         Username - {username}
        </span>
        <span>
          Email - {email}
        </span>
        <span>
          Password - {password}
        </span>
      </div>
    )
  }
}