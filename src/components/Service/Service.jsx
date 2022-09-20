import React from 'react';
import {serviceList} from "./ServiceList";
import Button from "../Button/Button";
import classes from "./_Service.module.scss"

class Service extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonLabel: "Learn more"
        }
    }
    render() {
        return (
            <div className={classes.serviceWrapper}>
            {serviceList.map((item, id) =>
                    <div className={classes.service} key={id}>
                        <div className={classes.serviceImg}>
                            <img
                                src={item.image}
                                alt={item.image}/>
                        </div>

                        <div className={classes.serviceInfo}>
                            <h2>{item.header}</h2>
                            <p>{item.descriptions}</p>
                            <Button buttonLabel={this.state.buttonLabel} />
                        </div>
                    </div>
            )}
            </div>
        );
    }
}

export default Service;