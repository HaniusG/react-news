import { Button, Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" bg='dark' variant='dark' expend='lg'>
      <Navbar.Brand href="#home">News</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id='my-navbar'>
        <Nav className='me-auto'>
          <Nav.Link href='#'>Home</Nav.Link>
          <Nav.Link href='#'>About</Nav.Link>
        </Nav>

        <div className='ml-auto d-flex'>
          <Form className='d-flex'>
            <FormControl type='text' placeholder='Search' className='me-2' />
            <Button variant='outline-success' className='me-xs-1 me-sm-2 me-md-3 me-lg-5 '>Search</Button>
            <Button variant='primary' className='me-2'>Login</Button>
            <Button variant='secondary' className='me-2'>Register</Button>
          </Form>
        </div>

      </Navbar.Collapse>
    </Navbar>


  );
}

export default Header;