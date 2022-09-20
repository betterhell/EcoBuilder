import React from 'react';
import classes from "./_Buttom.module.scss"

class Button extends React.Component {
    constructor() {
        super();
    }

    render() {
        const buttonLabel = this.props.buttonLabel

        return (
            <div className={classes.buttonWrapper}>
                <button
                    className={classes.button}>{buttonLabel}</button>
            </div>
        );
    }
}

export default Button;