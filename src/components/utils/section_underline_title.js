import React from 'react';

const SectionUnderlineTitle = (props) => {
    
    return (
        <React.Fragment>
            <div className="pt-sm-5 pt-3 mb-2 mb-sm-4 cursor-default">
                <div className={`text-${props.titleColor} h1 font-primary font-weight-lighter text-center`}>
                    {props.sectionTitle}
                </div>
                <hr className={`border-${props.lineColor} w-5r mt-0`} /> 
            </div>
        </React.Fragment>
    );
}

export default SectionUnderlineTitle;