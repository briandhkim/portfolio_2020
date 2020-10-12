import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LandingMain = (props) => {

    return (
        <React.Fragment>
            <Container fluid id="landing" className="d-flex justify-content-center align-items-center h-100">
                {/* <div className="landing-parallax"></div> */}
                <Row>
                    <Col xs={12} className="mb-4 font-primary">
                        <h1>
                            Brian Kim
                        </h1>
                    </Col>
                    <Col xs={12} className="font-secondary">
                        <h2>
                            Software Developer
                        </h2>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
}

export default LandingMain;