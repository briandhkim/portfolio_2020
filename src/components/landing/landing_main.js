import React from 'react';
import Container from 'react-bootstrap/Container';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {animateScroll as scroll} from 'react-scroll';
import {Parallax, Background} from 'react-parallax';

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
            <div className="position-absolute">
                <Parallax
                    bgImage={require('../../assets/landing_bg.png')}
                    strength={300}
                    style={{
                        width: '90vw',
                        height: '100vh',
                        left: 'calc(-5.55% + 10vw)'
                    }}
                    bgImageStyle={{
                        top:'5%',
                        height: '85%',
                        width: 'auto'
                    }}
                >
                </Parallax>
            </div>
            <Container fluid id="landing" className="d-flex justify-content-center align-items-end h-100 bg-plain-light">
                <div className="landing-start-btn button-salmon" onClick={toAbout}>
                    {/* <FontAwesomeIcon icon={faMouse} size="lg" fixedWidth className="d-block"/> */}
                    <div className="text-center">hi.</div>
                    <FontAwesomeIcon icon={faAngleDown} size="lg" fixedWidth className=""/> 
                </div>
            </Container>
        </React.Fragment>
    );
}

export default LandingMain;