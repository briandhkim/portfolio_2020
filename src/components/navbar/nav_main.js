import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarMain = (props) => {

    return (
        <React.Fragment>
            <Navbar bg="light" expand="lg" fixed="top" role="navigation">
                <Navbar.Brand href="#landing">
                    <div className="text-bento-primary font-primary border border-3 border-bento-primary p-1 ml-2">
                        bdhk
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="menu" />
                <Navbar.Collapse id="menu" className="justify-content-end mr-5">
                    <Nav className="font-secondary">
                        <Nav.Item>
                            <Nav.Link href="#about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </React.Fragment>
    );
}

export default NavbarMain;