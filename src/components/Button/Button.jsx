import React from 'react';
import classes from "./_Buttom.module.scss"

class Button extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className={classes.buttonWrapper}>
                <button
                    className={classes.button}>{this.props.buttonLabel}</button>
            </div>
        );
    }
}

export default Button;