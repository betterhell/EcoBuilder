import React from 'react';
import classes from "./_AboutUs.module.scss"
import AboutCard from "../AboutCard/AboutCard";
import Leaders from "../Leaders/Leaders";

class AboutUs extends React.Component {
    render() {
        return (
            <div className={classes.aboutUsWrapper}>
                <div className={classes.aboutUsLabel}>
                    <h2>About Us</h2>
                </div>

                <AboutCard />

                <div className={classes.leadersLabel}>
                    <p>Meet our leaders:</p>
                </div>

                <Leaders />

            </div>
        );
    }
}

export default AboutUs;