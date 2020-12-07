import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { animateScroll as scroll } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const FooterMain = (props) => {

    const toLanding = () => {
        scroll.scrollTo(0, {
            duration: 750,
            smooth: true
        });
    }

    return (
        <React.Fragment>
            <div className="footer-container bg-dark text-plain pb-5 pt-3">
                <Container className="">
                    <Row className="pt-5">
                        <Col xs={12} className="text-center">
                            <FontAwesomeIcon icon={faAngleDoubleUp} className="cursor-pointer button-plain" size="lg" onClick={toLanding} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="text-center pt-5">
                            <a className="text-linkedin mr-4" href="https://www.linkedin.com/in/briandhkimucla/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
                            </a>
                            <a className="text-danger mr-4" href="/docs/kimdh.resume.pdf" target="_blank" >
                                <FontAwesomeIcon icon={faFilePdf} className="" size="2x" fixedWidth />
                            </a>
                            <a className="button-plain" href="https://github.com/briandhkim" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="2x" fixedWidth />
                            </a>
                        </Col>
                    </Row>
                    <hr className="border-salmon-light" />
                    <Row>
                        <Col xs={12} className="text-center font-primary font-weight-light small cursor-default">
                            © 2020 | Dong Hyun Kim
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default FooterMain;