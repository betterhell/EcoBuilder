import React from 'react';
import classes from "./_BurgerButton.module.scss"

class BurgerButton extends React.Component {
    render() {
        const toggle = this.props.toggleMenu

        return (
            <div onClick={toggle} className={classes.burger}>
                <span className={classes.burger_item1}></span>
                <span className={classes.burger_item2}></span>
                <span className={classes.burger_item3}></span>
            </div>
        );
    }
}

export default BurgerButton;