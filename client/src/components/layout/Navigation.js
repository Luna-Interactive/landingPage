import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import Logo from './luna.png';

const Navigation = () => {
    return (
            
        <Navbar collapseOnSelect expand='lg' variant='light'> 
            <Navbar.Brand href="#home"> 
                <img 
                    src = {Logo}
                    height = "80"
                    
                    className = "d-inline-block align-top"
                    alt = ""
                /> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="">Catastrophe</Nav.Link>
                    <Nav.Link href="">Download</Nav.Link>
                    <Nav.Link href="">Team</Nav.Link>
                    <Nav.Link href="">News</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
        
    )
}

export default Navigation
