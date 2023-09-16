import { Component } from "react";
import './user-page.css';
export default class UserPage extends Component {


 

  render() {
    const { username, email, password } = this.props;
    return (
      <div> 
        Username - {username}
        Email - {email}
        password - {password}
      </div>
    )
  }
}