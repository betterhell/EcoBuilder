import React from 'react';
import classes from "./App.module.scss"
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";

class App extends React.Component {
    render() {
        return (
            <div className={classes.wrapper}>
                <Header/>
                <MainContent/>
                <Services />
                <AboutUs />
                <ContactUs />
            </div>
        );
    }
}

export default App;