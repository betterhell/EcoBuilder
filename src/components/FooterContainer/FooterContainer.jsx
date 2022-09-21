import React from 'react';
import FooterLinks from "../FooterLinks/FooterLinks";
import FooterDesc from "../FooterDesc/FooterDesc";
import FooterSocials from "../FooterSocials/FooterSocials";
import classes from "./_FooterContainer.module.scss"

class FooterContainer extends React.Component {
    render() {
        return (
            <div className={classes.footerContainerWrapper}>
                <FooterLinks />
                <FooterDesc />
                <FooterSocials />
            </div>
        );
    }
}

export default FooterContainer;