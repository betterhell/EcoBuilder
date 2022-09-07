import React from 'react';
import MainContentInfo from "../MainContentInfo/MainContentInfo";
import mainImg from "../../images/main.png"
import classes from "./_MainContent.module.scss"
import ScrollArrow from "../ScrollArrow/ScrollArrow";


class MainContent extends React.Component {
    render() {

        return (
            <div className={classes.mainContentWrapper}>
              <MainContentInfo />
              <img className={classes.mainContentImg} src={mainImg} alt="Main Image" />
                <ScrollArrow />
            </div>
        );
    }
}

export default MainContent;