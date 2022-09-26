import React from 'react';
import classes from "./_ServicesHeader.module.scss"

class ServicesHeader extends React.Component {
    render() {
        return (
            <div className={classes.servicesHeaderWrapper}>
                <h2>Our Services</h2>
                <p>At Eco-builders, we place the client’s needs first and build structures that will have a positive impact on their lives. Below are a few types of structures that we specialize in:</p>
                <ul>
                    <li>Office buildings</li>
                    <li>Mansions</li>
                    <li>Eco houses</li>
                </ul>
            </div>
        );
    }
}

export default ServicesHeader;