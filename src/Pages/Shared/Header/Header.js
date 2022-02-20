import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo.jpg';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
            <Container>
            <NavLink className="logoLink" to="/home">
                <Navbar.Brand>
                    <img
                    alt=""
                    src={logo}
                    width="45"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Health Life
                </Navbar.Brand>
            </NavLink>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="navlink" to="/home">Home</NavLink>
                    <NavLink className="navlink" to="/services">Services</NavLink>
                    <NavLink className="navlink" to="/doctors">Doctors</NavLink>
                    <NavLink className="navlink" to="/about">AboutUs</NavLink>
                </Nav>
                { !user.email ? 
                <Nav>
                    <NavLink to="/signup">
                        <Button variant="info">SignUp</Button>
                    </NavLink>
                    <NavLink to="/login">
                        <Button variant="success">LogIn</Button>
                    </NavLink>
                </Nav> :
                <Nav>
                    <Navbar.Brand>{user.email}</Navbar.Brand>
                    <Button onClick={logOut} variant="primary">LogOut</Button>
                </Nav>
                }
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;