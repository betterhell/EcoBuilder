import React from 'react';
import arrowImg from "../../images/arrow.svg"
import classes from "./_ScrollArrow.module.scss"

class ScrollArrow extends React.Component {
    render() {
        return (
            <div className={classes.scrollArrowWrapper}>
                <img className={classes.scrollArrowImg} src={arrowImg} alt="Arrow Down"/>
                <p className={classes.scrollArrowText}>Scroll Down</p>
            </div>
        );
    }
}

export default ScrollArrow;