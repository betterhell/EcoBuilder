import React from 'react';
import classes from "./_BurgerButtonActive.module.scss"

class BurgerButtonActive extends React.Component {
    render() {
        const toggle = this.props.toggleMenu

        return (
            <div onClick={toggle} className={classes.burgerActive}>
                <span className={classes.burgerActive_item1}></span>
                <span className={classes.burgerActive_item2}></span>
                <span className={classes.burgerActive_item3}></span>
            </div>
        );
    }
}

export default BurgerButtonActive;