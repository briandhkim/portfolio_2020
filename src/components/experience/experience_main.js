import React from 'react';
import Container from 'react-bootstrap/Container';
import SectionTitle from '../utils/section_title';
import BeSmartee from './besmartee';

const ExperienceMain = (props) => {

    return (
        <React.Fragment>
            <div className="bg-bento-light pb-3 pb-sm-5">
                <Container id="experience" className="text-plain">
                    <SectionTitle
                        sectionTitle="experience"
                        titleColor="plain"
                        lineColor="salmon"
                    />
                    <BeSmartee />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default ExperienceMain;