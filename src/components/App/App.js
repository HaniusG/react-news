import { useState } from "react";
import Header from "../Header";
import NewsCard from "../NewsCard";
import ProfileCard from "../ProfileCard";


import { Container, Row, Col, Card } from 'react-bootstrap'




const news = [
  {
    id: 1,
    imageUrl: "/images/image1.jpg",
    title: "Title",
    text: "inch vor text",
    fullText: 'news full text1',
    pubDate: '17/03/2022',
  },
  {
    id: 2,
    imageUrl: "/images/image2.webp",
    title: "Title",
    text: "inch vor text",
    fullText: 'news full text2',
    pubDate: '25/02/2021',
  },
  {
    id: 3,
    imageUrl: "/images/image3.jpg",
    title: "Title",
    text: "inch vor text",
    fullText: 'news full text3',
    pubDate: '25/03/2021',
  },
  {
    id: 4,
    imageUrl: "/images/image4.jpg",
    title: "Title",
    text: "inch vor text",
    fullText: 'news full text4',
    pubDate: '25/03/2024',
  },
]


function App() {

  const [newsCardData, setNewsCardData] = useState({});


  const handleNewsCardClick = ({imageUrl, title, text, id, fullText, pubDate}) => {
      const newObj  = {
        imageUrl,
        title,
        text,
        id,
        fullText,
        pubDate
      }

      setNewsCardData(newObj)
  }

  return (
    <div>
      <Header />

      <Container>
        <h1>My personal blog</h1>
        <span>For example, here are two grids to...</span>
      </Container>

      <Container >
        <Row>
          {news.map((n)=>{
            return(
              <Col onClick={() => handleNewsCardClick(n)} lg={3} md={4} sm={6} xs={12} key={n.id}>
                <NewsCard data={n}/>
              </Col>
            )
          })}
        </Row>

        <Card className="mb-4">
              <Card.Img variant='top' src={newsCardData.imageUrl}/>
              <Card.Body>
                <Card.Title>{newsCardData.title}</Card.Title>
                <Card.Text>{newsCardData.text}</Card.Text>
                <Card.Text>{newsCardData.fullText}</Card.Text>
                <Card.Text>{newsCardData.pubDate}</Card.Text>
              </Card.Body>
        </Card>
        <Row>
          
        </Row>
      </Container>
      
      <ProfileCard/>

      <footer fluid className="bg-dark text-white text-center p-3" >
        <Container>
            &copy; 20223 News portal. All Rigths deserve
        </Container>
      </footer>
      
    </div>


  );
}


export default App;
