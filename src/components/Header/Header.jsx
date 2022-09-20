import React from 'react';
import classes from "./_Header.module.scss"
import Navigations from "../Navigations/Navigations";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonLabel: "Log in",
        }
    }

    render() {

        return (
            <div className={classes.headerWrapper}>
                <Logo />
                <Navigations />
                <Button buttonLabel={this.state.buttonLabel} />
            </div>
        );
    }
}

export default Header;