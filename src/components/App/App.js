import Header from "../Header";
import Pricing from "../Pricing";
import NewsCard from "../NewsCard";
import { Container, Row, Col, Card } from 'react-bootstrap'
const info = [
  {
    imageUrl: "https://fbpe.org/wp-content/uploads/2017/11/licensed-unlicensed-245x300.jpg",
    title: "Title",
    text: "inch vor text"
  },
  {
    imageUrl: "https://fbpe.org/wp-content/uploads/2017/11/licensed-unlicensed-245x300.jpg",
    title: "Title",
    text: "inch vor text"
  },
  {
    imageUrl: "https://fbpe.org/wp-content/uploads/2017/11/licensed-unlicensed-245x300.jpg",
    title: "Title",
    text: "inch vor text"
  },
  {
    imageUrl: "https://fbpe.org/wp-content/uploads/2017/11/licensed-unlicensed-245x300.jpg",
    title: "Title",
    text: "inch vgior text"
  }
]

function App() {
  return (
    <div>
      <Header />

      <Container>
        <h1>My personal blog</h1>
        <span>For example, here are two grids to...</span>
      </Container>

      <Container >
        <Row>
          {info.map(({imageUrl, title, text})=>{
            return(
              <Col lg={3} md={4} sm={6} xs={12}>
                <NewsCard imageUrl={imageUrl} title={title} text={text}/>
              </Col>
            )
              
          })}
        </Row>
      </Container>

      
    </div>


  );
}


export default App;
