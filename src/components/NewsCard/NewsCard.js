import {  Card } from 'react-bootstrap'

export default function NewsCard({imageUrl, title, text}) {
    return(
        <Card className="mb-4">
              <Card.Img variant='top' src={imageUrl}/>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{text}</Card.Text>
              </Card.Body>
        </Card>
    )
}