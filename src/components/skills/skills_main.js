import React from 'react';
import Container from 'react-bootstrap/Container';
import SectionTitle from '../utils/section_title';
// import IconView from './icon_view';
import TextView from './text_view';

const SkillsMain = (props) => {

    return (
        <React.Fragment>
            <div className="bg-plain-light pb-3 pb-sm-5">
                <Container id="skills" className="text-bento">
                    <SectionTitle
                        sectionTitle="skills"
                        titleColor="bento"
                        lineColor="salmon"
                        subTitleColor="bento-light"
                    />
                    <TextView />
                </Container>
            </div>
        </React.Fragment>
    );
}

export default SkillsMain;