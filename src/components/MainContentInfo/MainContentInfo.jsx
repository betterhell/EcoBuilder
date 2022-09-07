import React from 'react';
import Button from "../Button/Button";
import classes from "./_MainContentInfo.module.scss"

class MainContentInfo extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonLabel: "Hire Us"
        }
    }
    render() {
        return (
            <div className={classes.mainContentInfoWrapper}>
              <h1 className={classes.mainContentInfoH1}>Building something?</h1>
                <p className={classes.mainContentInfoP} >Eco-builders is a team of professional construction workers whose sole mission is to build <span className={classes.highlight}>durable</span> and <span className={classes.highlight}>eco-friendly</span> buildings.</p>
                <Button buttonLabel={this.state.buttonLabel} />
            </div>
        );
    }
}

export default MainContentInfo;