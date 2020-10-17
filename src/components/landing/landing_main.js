import React from 'react';
import Container from 'react-bootstrap/Container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMouse, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {animateScroll as scroll} from 'react-scroll';

const LandingMain = (props) => {

    const toAbout = () => {
        const aboutX = document.getElementById('about').offsetTop - 57.5;
        scroll.scrollTo(aboutX, {
            duration: 500,
            smooth: true
        });
    }

    return (
        <React.Fragment>
            <Container fluid id="landing" className="d-flex justify-content-center align-items-end h-100">
                <div className="landing-start-btn" onClick={toAbout}>
                    <FontAwesomeIcon icon={faMouse} size="lg" fixedWidth className="d-block text-salmon"/>
                    <FontAwesomeIcon icon={faAngleDown} size="lg" fixedWidth className="text-salmon"/> 
                </div>
            </Container>
        </React.Fragment>
    );
}

export default LandingMain;