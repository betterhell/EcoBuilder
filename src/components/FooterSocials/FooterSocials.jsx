import React from 'react';
import linked from "../../images/LinkedinFooter.svg"
import twitter from "../../images/TwitterFooter.svg"
import facebook from "../../images/FacebookFooter.svg"
import instagram from "../../images/InstagramFooter.svg"
import classes from "./_FooterSocials.module.scss"

class FooterSocials extends React.Component {
    render() {
        return (
            <div className={classes.footerSocialsWrapper}>
                <h3>Connect with us:</h3>
                <a href=""><img src={twitter} alt={twitter}/></a>
                <a href=""><img src={facebook} alt={facebook}/></a>
                <a href=""><img src={instagram} alt={instagram}/></a>
                <a href=""><img src={linked} alt={linked}/></a>
            </div>
        );
    }
}

export default FooterSocials;