import React from 'react';
import classes from "./_BurgerMenu.module.scss"
import BurgerNavigations from "../BurgerNavigations/BurgerNavigations";

class BurgerMenu extends React.Component {
    constructor() {
        super();
    }



    render() {
        const isOpen = this.props.isOpen
        const toggleBurger = this.props.toggleBurger

        return (
            <div className={classes.burgerMenuWrapper}>
                <div onClick={this.handleOpenBurgerMenu} className={classes.burger}>
                    <span></span>
                </div>
                {isOpen === true ?
                    <div className={classes.burgerMenu}>
                        <BurgerNavigations />
                    </div> : null }
            </div>
        );
    }
}

export default BurgerMenu;