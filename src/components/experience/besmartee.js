import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class BeSmartee extends Component {

    timeBetweenNowAndGiven(year, month, date) {
        //month - january is 0 because it's 0 indexed

        const dateNow = new Date();
        const timeNow = dateNow.getTime();

        const dateInitial = new Date(year, month, date);
        const timeInitial = dateInitial.getTime();

        const timeDiff = timeNow - timeInitial;

        const minutes = 1000 * 60;
        const hours = minutes * 60;
        const days = hours * 24;
        const months = days * 30;
        const years = days * 365;

        const y = Math.floor(timeDiff/years);
        const m = Math.floor(timeDiff/months) - (y * 12);
        
        let timeStr = "";
        if (y) {
            timeStr += (y === 1) ? `${y} yr` : `${y} yrs`;
        }
        if (m) {
            timeStr += (m === 1) ? ` ${m} mo` : ` ${m} mos`;
        }
        return timeStr;
    }

    render() {

        const overallTimeDifference = this.timeBetweenNowAndGiven(2018, 6, 11);
        console.log(overallTimeDifference);
         
        return (
            <React.Fragment>
                <Row className="besmartee-container">
                    testtt
                </Row>
            </React.Fragment>
        );
    }
};

export default BeSmartee;