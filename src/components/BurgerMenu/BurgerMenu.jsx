import React from 'react';
import classes from "./_BurgerMenu.module.scss"
import BurgerNavigations from "../BurgerNavigations/BurgerNavigations";
import BurgerButton from "../BurgerButton/BurgerButton";
import BurgerButtonActive from "../BurgerButtonActive/BurgerButtonActive";

class BurgerMenu extends React.Component {
    render() {
        const isOpen = this.props.isOpen
        const toggleBurger = this.props.toggleBurger
        return (
            <div className={classes.burgerMenuWrapper}>
                {isOpen === true
                    ? <BurgerButtonActive toggleMenu={toggleBurger} />
                    : <BurgerButton toggleMenu={toggleBurger} />}
                {isOpen === true
                    ? <div className={classes.burgerMenuOpen}>
                          <BurgerNavigations />
                      </div>
                    : <div className={classes.burgerMenu}>
                          <BurgerNavigations isOpen={isOpen} loginModal={toggleBurger} />
                      </div> }
            </div>
        );
    }
}

export default BurgerMenu;