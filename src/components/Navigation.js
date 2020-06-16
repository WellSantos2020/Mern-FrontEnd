import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import { logoutUser } from '../store/actions/authActions'
import {connect}    from 'react-redux';






class Navigation extends Component {
  handellogout =()=>{
    this.props.logoutUser()
    console.log(this.props)
    
   
    

    
  }
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/cities">Cities</Nav.Link>
      <Nav.Link href="/login">Log in</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link onClick={this.handellogout}href="/">Logout</Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

            </div>
        )
    }
}

export default connect(null,{logoutUser})(Navigation)