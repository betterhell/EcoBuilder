import React from 'react';
import {aboutCardsList} from "../AboutCard/AboutCardsList"
import classes from "./_FooterDesc.module.scss"

class FooterDesc extends React.Component {
    render() {
        return (
            <div className={classes.footerDescWrapper}>
                <h3>{aboutCardsList[0].label}</h3>
                <p>{aboutCardsList[0].desc}</p>
            </div>
        );
    }
}

export default FooterDesc;