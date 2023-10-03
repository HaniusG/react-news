import Header from "../Header";
import NewsCard from "../NewsCard";
import ProfileCard from "../ProfileCard";


import { Container, Row, Col } from 'react-bootstrap'
const news = [
  {
    id: 1,
    imageUrl: "/images/image1.jpg",
    title: "Title",
    text: "inch vor text"
  },
  {
    id: 2,
    imageUrl: "/images/image2.webp",
    title: "Title",
    text: "inch vor text"
  },
  {
    id: 3,
    imageUrl: "/images/image3.jpg",
    title: "Title",
    text: "inch vor text"
  },
  {
    id: 4,
    imageUrl: "/images/image4.jpg",
    title: "Title",
    text: "inch vor text"
  },
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
          {news.map(({imageUrl, title, text, id})=>{
            return(
              <Col lg={3} md={4} sm={6} xs={12} key={id}>
                <NewsCard imageUrl={imageUrl} title={title} text={text}/>
              </Col>
            )
          })}
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
