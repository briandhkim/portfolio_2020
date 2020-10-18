import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link, animateScroll as scroll} from 'react-scroll';

class NavbarMain extends Component {

    constructor (props) {
        super(props);

        this.state = {
            expanded: false
        };

        this.toTop = this.toTop.bind(this);
        this.toggleMobileNavState = this.toggleMobileNavState.bind(this);
        this.closeMobileNav = this.closeMobileNav.bind(this);
    }

    toTop(){
        scroll.scrollToTop({duration: 500});
        this.closeMobileNav();
    };

    toggleMobileNavState = (expanded) => {
        this.setState({expanded});
    }

    closeMobileNav = () => {
        this.setState({expanded: false});
    };

    render() {
        return (
            <React.Fragment>
                <Navbar bg="plain-light" fixed="top" expand="sm" onToggle={this.toggleMobileNavState} expanded={this.state.expanded} role="navigation" className="">
                    <Navbar.Brand onClick={this.toTop} className="cursor-pointer">
                        <span className="font-primary p-1 ml-2">
                            bdhk
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="menu" />
                    <Navbar.Collapse id="menu" className="justify-content-end">
                        <Nav className="font-secondary">
                            <Nav.Item className="cursor-pointer">
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-59}
                                    className="nav-link"
                                    onClick={this.closeMobileNav}
                                    >
                                    ABOUT
                                </Link>
                            </Nav.Item>
                            <Nav.Item className="cursor-pointer">
                                <Link
                                    activeClass="active"
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    offset={-59}
                                    className="nav-link"
                                    onClick={this.closeMobileNav}
                                    >
                                    EXPERIENCE
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
    
}

export default NavbarMain;