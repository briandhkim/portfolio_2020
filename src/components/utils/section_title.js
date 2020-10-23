import React from 'react';

const SectionTitle = (props) => {
    
    function renderSubTitle(props) {
        return (
            <div className={`h5 text-center text-${props.subTitleColor} font-secondary font-weight-light mb-2 mb-sm-4`}>
                {props.subTitle}
            </div>
        );
    }

    let subTitle = "";
    if (props.subTitle) {
        subTitle = renderSubTitle(props);
    }

    return (
        <React.Fragment>
            <div className={`justify-content-center d-flex pt-sm-5 pt-3 mb-${subTitle === "" ? "2" : "0"} mb-sm-${subTitle === "" ? "4" : "0"} cursor-default`}>
                <div className="w-1r mr-2">
                    <hr className={`border-${props.lineColor} mt-4`} />
                </div>
                <div className={`text-${props.titleColor} h1 font-primary font-weight-light text-center`}>
                    {props.sectionTitle}
                </div>
                <div className="w-1r ml-2">
                    <hr className={`border-${props.lineColor} mt-4`} />
                </div>
            </div>
            {subTitle}
        </React.Fragment>
    );
}

export default SectionTitle;