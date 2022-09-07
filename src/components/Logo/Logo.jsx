import React from 'react';
import classes from "./_Logo.module.scss"

class Logo extends React.Component {
    render() {
        return (
            <div className={classes.logoWrapper}>
                <a className={classes.logo} href="##">Eco-builder</a>
            </div>
        );
    }
}

export default Logo;