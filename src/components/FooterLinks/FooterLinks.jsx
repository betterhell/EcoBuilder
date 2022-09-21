import React from 'react';
import classes from "./_FooterLinks.module.scss"

class FooterLinks extends React.Component {
    render() {
        return (
            <div className={classes.footerLinksWrapper}>
                <h3>Quick links:</h3>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Service</a></li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
        );
    }
}

export default FooterLinks;