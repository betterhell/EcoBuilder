import React from 'react';
import classes from "./_Services.module.scss"
import Service from "../Service/Service";
import ServicesHeader from "../ServicesHeader/ServicesHeader";

class Services extends React.Component {
    render() {
        return (
            <div className={classes.servicesWrapper}>
                <ServicesHeader />
                <Service />
            </div>
        );
    }
}

export default Services;