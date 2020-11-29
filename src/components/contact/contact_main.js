import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionTitle from '../utils/section_title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


const ContactMain = (props) => {
    return (
        <React.Fragment>
            <div className="bg-plain-light pb-3 pb-sm-5">
                <Container id="contact" className="text-bento font-primary">
                    <SectionTitle
                        sectionTitle="contact"
                        titleColor="bento"
                        lineColor="salmon"
                        subTitleColor="salmon"
                        subTitle="Let's Talk"
                    />
                    <Row>
                        <Col sm={12} md={{ span: 8, offset: 2 }} lg={{ span: 6, offset: 3 }} className="mb-5 font-secondary h5 font-weight-light">
                            I'm always interested in new challenges opportunities. Feel free to contact me 
                            using the email address below or send me a message via LinkedIn.
                        </Col>
                    </Row>
                    <Row className="h4 font-weight-light">
                        <Col xs={12} sm={{ span: 8, offset: 2 }} md={{ span: 9, offset: 3 }} lg={{ span: 8, offset: 4 }} className="">
                            <FontAwesomeIcon icon={faEnvelope} className="text-bento-light-3 mr-2" fixedWidth />
                            <span>
                                bri
                                <span>a</span>
                                <span>
                                    ndhk
                                    <span>im</span>
                                </span>
                                93@
                                <span>
                                    gm
                                    <span>
                                        ail.
                                    </span>
                                </span>
                                com
                            </span>
                        </Col>
                    </Row>
                    <Row className="h4 font-weight-light">
                        <Col xs={12} sm={{ span: 8, offset: 2 }} md={{ span: 9, offset: 3 }} lg={{ span: 8, offset: 4 }} className="">
                            <FontAwesomeIcon icon={faLinkedin} className="mr-2 text-linkedin" fixedWidth />
                            <a className="button-salmon" href="https://www.linkedin.com/in/briandhkimucla/" target="_blank" rel="noopener noreferrer">
                                LinkedIn
                                <FontAwesomeIcon icon={faExternalLinkAlt} className="fa-xxs ml-1" fixedWidth />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default ContactMain;