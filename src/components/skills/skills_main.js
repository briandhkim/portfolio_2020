import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SectionTitle from '../utils/section_title';

const SkillsMain = (props) => {

    return (
        <React.Fragment>
            <div className="bg-plain pb-3 pb-sm-5">
                <Container id="skills" className="text-bento">
                    <SectionTitle 
                        sectionTitle="skills" 
                        titleColor="bento" 
                        lineColor="salmon"
                        subTitle="Ordered by Expertise/Familiarity"
                        subTitleColor="bento-light"
                    ></SectionTitle>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default SkillsMain;