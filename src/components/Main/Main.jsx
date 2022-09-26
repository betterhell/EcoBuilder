import React from 'react';
import MainContent from "../MainContent/MainContent";
import Services from "../Services/Services";
import ContactUs from "../ContactUs/ContactUs";
import classes from "./_Main.module.scss"
import AboutUs from "../AboutUs/AboutUs";

class Main extends React.Component {
    render() {
        return (
            <div className={classes.mainWrapper}>
                <MainContent />
                <Services />
                <AboutUs />
                <ContactUs />
            </div>
        );
    }
}

export default Main;