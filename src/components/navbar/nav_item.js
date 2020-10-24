import React from 'react';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-scroll';

const NavItem = (props) => {

    return (
        <Nav.Item className="cursor-pointer">
            <Link
                activeClass="active"
                to={props.toID}
                spy={true}
                smooth={true}
                duration={500}
                offset={-59}
                className="nav-link"
                onClick={props.navClick}
            >
                {props.linkText}
            </Link>
        </Nav.Item>
    );
}

export default NavItem;