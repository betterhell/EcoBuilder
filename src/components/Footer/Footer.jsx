import React from 'react';
import FooterContainer from "../FooterContainer/FooterContainer";
import classes from "./_Footer.module.scss"

class Footer extends React.Component {
    render() {
        return (
            <div className={classes.footerWrapper}>
                <FooterContainer />
            </div>
        );
    }
}

export default Footer;