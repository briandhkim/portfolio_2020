import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { faTools, faProjectDiagram, faPlus, faMinus, faUsers, faStar } from '@fortawesome/free-solid-svg-icons';

class BeSmartee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showPDTDetails: 0,
            showImpDetails: 0,
            showUXDetails: 0
        }

        this.togglePDTDetails = this.togglePDTDetails.bind(this);
        this.toggleImpDetails = this.toggleImpDetails.bind(this);
        this.toggleUXDetails = this.toggleUXDetails.bind(this);
    }

    timeBetweenNowAndGiven(year, month, date) {
        //month - january is 0 because it's 0 indexed

        const timeNow = (new Date()).getTime();
        const timeInitial = (new Date(year, month, date)).getTime();
        const timeDiff = timeNow - timeInitial;

        const minutes = 1000 * 60;
        const hours = minutes * 60;
        const days = hours * 24;
        const months = days * 30;
        const years = days * 365;

        const y = Math.floor(timeDiff / years);
        const m = Math.round(timeDiff / months) - (y * 12);

        let timeStr = "";
        if (y) {
            timeStr += (y === 1) ? `${y} yr` : `${y} yrs`;
        }
        if (m) {
            timeStr += (m === 1) ? ` ${m} mo` : ` ${m} mos`;
        }
        return timeStr;
    }

    togglePDTDetails() {
        this.setState({ showPDTDetails: 1 - this.state.showPDTDetails });
    }
    toggleImpDetails() {
        this.setState({ showImpDetails: 1 - this.state.showImpDetails });
    }
    toggleUXDetails() {
        this.setState({ showUXDetails: 1 - this.state.showUXDetails });
    }

    render() {

        const overallTimeDifference = this.timeBetweenNowAndGiven(2018, 6, 11);
        const currentTeamTimeDifference = this.timeBetweenNowAndGiven(2020, 9, 1);

        return (
            <React.Fragment>
                <div className="besmartee-container font-primary">
                    <Row>
                        <Col xs={12} sm={{ span: 10, offset: 1 }} className="" >
                            <div>
                                <a className="h1 button-plain" href="https://www.linkedin.com/company/besmartee/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLightbulb} transform={{ rotate: 35 }} className="text-warning" fixedWidth />
                                    BeSmartee
                                </a>
                            </div>
                            <div className="h5 text-salmon">
                                Full Stack Software Engineer
                            </div>
                            <div className="h6 text-plain-darker">
                                Jul 2018 - Present / {overallTimeDifference}
                            </div>
                        </Col>
                    </Row>
                    <hr className="border-salmon-light" />
                    <Row className="" >
                        <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }} >
                            <div className="h4 font-secondary">
                                <FontAwesomeIcon icon={faTools} className="mr-1 text-bento-light-3" fixedWidth />
                                Production Defect Team
                            </div>
                        </Col>
                        <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                            <div className="experience-details-section border-left border-bento-light-3 mb-2">
                                <div className="h6 font-primary font-weight-light text-plain-darker ml-4">
                                    Oct 2020 - Present / {currentTeamTimeDifference}
                                </div>
                                <Button variant="salmon" size="sm" className="ml-4 mb-2" onClick={this.togglePDTDetails}>
                                    <FontAwesomeIcon icon={this.state.showPDTDetails ? faMinus : faPlus} className="mr-1" fixedWidth />
                                    {this.state.showPDTDetails ? "Less" : "More"}
                                </Button>
                                <ul className={`font-secondary font-weight-light ${this.state.showPDTDetails ? '' : ' d-none '}`}>
                                    <li>Provided quick resolution to production level defects to minimize interruption to business operation</li>
                                    <li>Determined short-term solutions and designed long-term improvements to eliminate system defects</li>
                                    <li>Collaborated with Client Success, Implementation, and QA teams to provide effective resolution for reported bugs</li>
                                    <li>Provided guidance for new/Jr developers to help debug defects and determine long-term solutions when applicable</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                            <div className="h4 font-secondary">
                                <FontAwesomeIcon icon={faProjectDiagram} className="mr-1 text-bento-light-3" fixedWidth />
                                Implementation Team
                            </div>
                        </Col>
                        <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                            <div className="experience-details-section border-left border-bento-light-3 mb-2">
                                <div className="h6 font-primary font-weight-light text-plain-darker ml-4">
                                    Feb 2019 - Oct 2020 / 1 yr 9 mos
                                </div>
                                <Button variant="salmon" size="sm" className="ml-4 mb-2" onClick={this.toggleImpDetails}>
                                    <FontAwesomeIcon icon={this.state.showImpDetails ? faMinus : faPlus} className="mr-1" fixedWidth />
                                    {this.state.showImpDetails ? "Less" : "More"}
                                </Button>
                                <ul className={`font-secondary font-weight-light ${this.state.showImpDetails ? '' : ' d-none '}`}>
                                    <li>Upgraded the encryption tool used by the core application to enforce secure data storage (PHP, MySQL)</li>
                                    <li>Developed a new, single-page application (SPA) designed to create customizable user experience (Vue.js, PHP/Laravel)</li>
                                    <li>Developed applications with PHP Laravel framework, utilizing test-driven development (TDD) methodology</li>
                                    <li>Coordinated with the Client Success and Implementation departments to provide effective solutions for client requests</li>
                                    <li>Quickly adapted to developing with various frameworks/libraries including jQuery , Vue.js , and Laravel</li>
                                    <li>Created clean, reusable code for frontend and backend</li>
                                    <li>Provided guidance and advice for other developers</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                            <div className="h4 font-secondary">
                                <FontAwesomeIcon icon={faUsers} className="mr-1 text-bento-light-3" fixedWidth />
                                UX Team
                            </div>
                        </Col>
                        <Col xs={12} sm={{ span: 10, offset: 1 }} md={{ span: 8, offset: 2 }}>
                            <div className="experience-details-section border-left border-bento-light-3 mb-2">
                                <div className="h6 font-primary font-weight-light text-plain-darker ml-4">
                                    Jul 2018 - Feb 2019 / 8 mos
                                </div>
                                <Button variant="salmon" size="sm" className="ml-4 mb-2" onClick={this.toggleUXDetails}>
                                    <FontAwesomeIcon icon={this.state.showUXDetails ? faMinus : faPlus} className="mr-1" fixedWidth />
                                    {this.state.showUXDetails ? "Less" : "More"}
                                </Button>
                                <ul className={`font-secondary font-weight-light ${this.state.showUXDetails ? '' : ' d-none '}`}>
                                    <li>
                                        <span className="mr-1 font-tertiary font-weight-normal">
                                            <FontAwesomeIcon icon={faStar} className="text-warning" fixedWidth />
                                            Achievement:
                                        </span>
                                        2018 Rookie of the Year
                                    </li>
                                    <li>Updated existing/created new UI focused on web accessibility</li>
                                    <li>Developed intuitive, responsive user interface to create effective and learnable user experience</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </div>
            </React.Fragment>
        );
    }
};

export default BeSmartee;