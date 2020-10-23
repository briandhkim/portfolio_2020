import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionTitle from '../utils/section_title';

const ExperienceMain = (props) => {

    return (
        <React.Fragment>
            <div className="bg-salmon pb-3 pb-sm-5 h-100">
                <Container id="experience" className="text-bento">
                    <SectionTitle
                        sectionTitle="experience"
                        titleColor="bento"
                        lineColor="plain"
                    >
                    </SectionTitle>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default ExperienceMain;