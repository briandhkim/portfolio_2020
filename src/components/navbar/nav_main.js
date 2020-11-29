import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {animateScroll as scroll} from 'react-scroll';
import NavItem from './nav_item';

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
                            <NavItem toID="about" linkText="ABOUT" navClick={this.closeMobileNav}/>
                            <NavItem toID="skills" linkText="SKILLS" navClick={this.closeMobileNav} />
                            <NavItem toID="experience" linkText="EXPERIENCE" navClick={this.closeMobileNav} />
                            <NavItem toID="contact" linkText="CONTACT" navClick={this.closeMobileNav} />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
    
}

export default NavbarMain;