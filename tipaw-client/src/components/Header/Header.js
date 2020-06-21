import React from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './Header.css';


function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><Image src="assets/logo.png" className="tipaw-logo" />
                <span className="tipaw-name">TIPAW</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Router>
                        <Link to="/contact"><Nav.Link>Contact</Nav.Link></Link>
                        <Link to="/adopt"> <Nav.Link>Chiens à adopter </Nav.Link></Link>
                        <Link to="/sell">  <Nav.Link>Chiens à vendre</Nav.Link></Link>
                        <Link to="/vets">  <Nav.Link> Vétérinaires</Nav.Link></Link>
                        <Link to="/my-tipaw"> <Button className="my-tipaw" variant="warning">Mon Tipaw</Button></Link>
                    </Router>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
