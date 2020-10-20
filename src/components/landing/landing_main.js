import React from 'react';
import Container from 'react-bootstrap/Container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMouse, faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {animateScroll as scroll} from 'react-scroll';

const LandingMain = (props) => {

    const toAbout = () => {
        const aboutX = document.getElementById('about').offsetTop - 59;
        scroll.scrollTo(aboutX, {
            duration: 500,
            smooth: true
        });
    }

    return (
        <React.Fragment>
            <Container fluid id="landing" className="d-flex justify-content-center align-items-end h-100 bg-plain-light">
                <div className="landing-start-btn" onClick={toAbout}>
                    {/* <FontAwesomeIcon icon={faMouse} size="lg" fixedWidth className="d-block"/> */}
                    <div className="text-center">hi.</div>
                    <FontAwesomeIcon icon={faAngleDown} size="lg" fixedWidth className=""/> 
                </div>
            </Container>
        </React.Fragment>
    );
}

export default LandingMain;