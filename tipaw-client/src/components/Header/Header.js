import React from 'react';
import { Button, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, withRouter } from "react-router-dom";
import './Header.css';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Link className="header-item" to="/">
                <Navbar.Brand><Image src="assets/logo.png" className="tipaw-logo" />
                    <span className="tipaw-name">TIPAW</span>
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="header-item" to="/contact">Contact</Link>
                    <Link className="header-item" to="/adopt">Chiens à adopter</Link>
                    <Link className="header-item" to="/sell">Chiens à vendre</Link>
                    <Link className="header-item" to="/vets">Vétérinaires</Link>
                    <Link className="header-item" to="/my-tipaw"> <Button className="my-tipaw" variant="warning">Mon Tipaw</Button></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default withRouter(Header);
