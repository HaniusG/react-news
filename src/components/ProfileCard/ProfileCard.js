import { Card } from "react-bootstrap"
import fbicon from "./icons/facebook.svg"
import instaicon from "./icons/instagram.svg"
import twittericon from "./icons/twitter.svg"
import "./profile-card.css"



export default function ProfileCard (){
    return(
    <Card className="text-center bg-danger m-3 p-3 rounded-3 justify-content-center align-items-center"  style={{width: "300px", height: "400px"}}  >
        <Card.Img className="profileImg rounded-circle" style={{width: "100px"}} variant='top' src="https://media.licdn.com/dms/image/C4E03AQEvo4krubglXA/profile-displayphoto-shrink_800_800/0/1657753132585?e=1701907200&v=beta&t=zjW3VTvNlK-N7poKHUq6y6b4vaju1gNYwv9LvVDIf7Y"/>
              <Card.Body className="mt-2">
                <Card.Title>Ndife Samuel</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Product Design</Card.Subtitle>
                <hr ></hr>
                <Card.Text className="profileInfo">I choose the product design track because i love solving visual problems using UI/UX design</Card.Text>
                <img src={fbicon} alt="" style={{width: '20px'}} className="m-2"/>
                <img src={instaicon} alt="" style={{width: '20px'}} className="m-2"/>
                <img src={twittericon} alt="" style={{width: '20px'}} className="m-2"/>
              </Card.Body>
    </Card>

    )
}