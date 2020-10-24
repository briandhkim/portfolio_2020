import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import SectionTitle from '../utils/section_title';
import {animateScroll as scroll} from 'react-scroll';

const AboutMain = (props) => {

    const toExperience = () => {
        const experienceX = document.getElementById('experience').offsetTop - 59;
        scroll.scrollTo(experienceX, {
            duration: 500,
            smooth:true
        });
    }

    return (
        <React.Fragment>
            <div className="bg-bento pb-5">
                <Container id="about" className="text-plain-light">
                    {/* <SectionUnderlineTitle sectionTitle="A bout" titleColor="plain" lineColor="salmon" /> */}
                    <SectionTitle sectionTitle="about" titleColor="plain-light" lineColor="salmon" />
                    <Row>
                        <Col xs={12} md={6} lg={5} xl={4} className="mb-4 mb-md-0">
                            <div className="bg-bento-dark p-3">
                                <div className="pl-3 pr-3 pt-1 pb-1 about-card-outline">
                                    <ListGroup variant="flush" as="ul" className="">
                                        <ListGroup.Item as="li" className="bg-bento-dark border-bento-light cursor-default">
                                            <span className="font-secondary mr-2 text-salmon">
                                                name: 
                                            </span>
                                            <span className="font-tertiary font-weight-light">
                                                Dong Hyun (Brian) Kim
                                            </span>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="bg-bento-dark border-bento-light cursor-default">
                                            <span className="font-secondary mr-2 text-salmon">
                                                title: 
                                            </span>
                                            <span className="font-tertiary font-weight-light">
                                                Software Developer
                                            </span>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="bg-bento-dark border-bento-light cursor-default">
                                            <span className="font-secondary mr-2 text-salmon">
                                                company: 
                                            </span>
                                            <a href="https://www.besmartee.com/" target="_blank" rel="noopener noreferrer" className="font-tertiary font-weight-light text-plain-light">
                                                BeSmartee
                                            </a>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="bg-bento-dark border-bento-light cursor-default">
                                            <span className="font-secondary mr-2 text-salmon">
                                                resume: 
                                            </span>
                                            <span className="font-tertiary font-weight-light">
                                            </span>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="bg-bento-dark border-bento-light cursor-default">
                                            <span className="font-secondary mr-2 text-salmon">
                                                social: 
                                            </span>
                                            <span className="font-tertiary font-weight-light">
                                            </span>
                                        </ListGroup.Item>
                                        <ListGroup.Item as="li" className="bg-bento-dark border-bento-light cursor-default">
                                            <span className="font-secondary mr-2 text-salmon">
                                                location: 
                                            </span>
                                            <span className="font-tertiary font-weight-light">
                                                Southern California
                                            </span>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={7} xl={8}>
                            <div className="cursor-default">
                                <div className="font-secondary h5 font-weight-bold">
                                    hello there
                                </div>
                                <Row >
                                    <hr className="border-salmon w-5r mt-0 ml-3" />
                                </Row>
                            </div>
                            <div className="cursor-default">
                                <div className="font-primary h5 font-weight-light">
                                    My name is Brian, and I am a software developer.
                                </div>
                                <Row >
                                    <hr className="border-bento-dark border-5 w-50 ml-3" />
                                </Row>
                                <div className="font-secondary font-weight-light">
                                    I am a software developer with experience in both front-end and back-end development. 
                                    <br/><br/>
                                    Currently, I am working as a Full-Stack Software Developer in the Production Defect Team (PDT)
                                    at BeSmartee in Huntington Beach, California. As a member of the PDT team, I strive to provide
                                    quick, accurate resolution for production level defects. You can read more about my experience 
                                    at BeSmartee down <span className="cursor-pointer button-salmon" onClick={toExperience}>below</span>.
                                    
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default AboutMain;