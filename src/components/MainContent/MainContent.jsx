import React from 'react';
import MainContentInfo from "../MainContentInfo/MainContentInfo";
import mainImg from "../../images/main.png"
import classes from "./_MainContent.module.scss"
import ScrollArrow from "../ScrollArrow/ScrollArrow";


class MainContent extends React.Component {
    constructor() {
        super();
        this.state = {
            width: 0,
        }
    }


    updateDimensions = () => {
        this.setState({ width: window.innerWidth});
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    render() {
        const screenWidth = window.innerWidth

        return (
            <div className={classes.mainContentWrapper}>
              <MainContentInfo />
                <div className={classes.mainContentImg}>
                    <img src={mainImg} alt={mainImg} />
                </div>
                {screenWidth < 720 ? null : <ScrollArrow />}
            </div>
        );
    }
}

export default MainContent;