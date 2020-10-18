import React from 'react';

const SectionTitle = (props) => {
    
    return (
        <React.Fragment>
            <div className="justify-content-center d-flex pt-sm-5 pt-3 mb-2 mb-sm-4 cursor-default">
                <div className="w-1r mr-2">
                    <hr className={`border-${props.lineColor} mt-4`} />
                </div>
                <div className={`text-${props.titleColor} h1 font-primary font-weight-lighter text-center`}>
                    {props.sectionTitle}
                </div>
                <div className="w-1r ml-2">
                    <hr className={`border-${props.lineColor} mt-4`} />
                </div>
            </div>
        </React.Fragment>
    );
}

export default SectionTitle;