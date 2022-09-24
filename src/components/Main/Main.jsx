import React from 'react';
import MainContent from "../MainContent/MainContent";
import MainContentInfo from "../MainContentInfo/MainContentInfo";
import Services from "../Services/Services";
import ContactUs from "../ContactUs/ContactUs";

class Main extends React.Component {
    render() {
        return (
            <div>
                <MainContent />
                <MainContentInfo />
                <Services />
                <ContactUs />
            </div>
        );
    }
}

export default Main;