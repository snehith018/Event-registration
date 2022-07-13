import React, { Component } from 'react'
import{Navbar,Nav,Container, NavbarBrand,Button} from 'react-bootstrap'

export default class Navbarpro extends Component {
  render() {
    return (
      <div className='navbr'>
        <Navbar>
        <Container>
          <NavbarBrand href="#home" style={{ color : '#444BAB',fontWeight: 'bold'}}><img alt="logo" src={"/images/bplogo.png"} width="40" height="40" /> programing pathashala</NavbarBrand>
          <Nav.Link href="#action1"style={{color : 'black'}}>Renaissance</Nav.Link>
          <Nav.Link href="#action2"style={{color : 'black'}}>Campus Programes</Nav.Link>
          <Nav.Link href="#action3"style={{color : 'black'}}>Hire With Us</Nav.Link>
          <Nav.Link href="#action4"style={{color : 'black'}}>Stories</Nav.Link>
          <Nav.Link href="#action5"style={{color : 'black'}}>Events</Nav.Link>
          <a><Button class="login" variant="outline-success"style={{borderBlockColor :'blue', color : 'blue',fontWeight: 'bold'}}href="/login"> Log in </Button></a>
          <a><Button variant="outline-success" style={{backgroundColor :'blue', color : 'white',fontWeight: 'bold'}} href="/register"> Start Free Trail </Button></a>
        </Container>
      </Navbar>
      </div>
    )
  }
}
