import React from "react";
import { Navbar, Nav, NavItem, NavDropdown, Container } from "react-bootstrap";
import Logo from '../assets/images/nedLogo.png';
import "./Navbar.css"
// import MenuItem from 'react-bootstrap/MenuItem'

// const {
//     Navbar,
//     Nav,
//     NavItem,
//     NavDropdown,
//     MenuItem
//   } = ReactBootstrap;

class NavbarInstance extends React.Component {
  render() {
    return (
      <Navbar >
          <Navbar expand="xl"></Navbar>
        <Container className="navBarGradient" style={{width:"100%",maxWidth:"3000px"}}>
          <Navbar.Brand href="#home"><img src={Logo} height="50px"/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
export default NavbarInstance;
