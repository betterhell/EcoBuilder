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
                {isOpen === true ?
                     <div onClick={toggleBurger} className={classes.burgerActive}>
                         <span className={classes.burgerActive_item1}></span>
                         <span className={classes.burgerActive_item2}></span>
                         <span className={classes.burgerActive_item3}></span>
                     </div>
                    : <div onClick={toggleBurger} className={classes.burger}>
                        <span className={classes.burger_item1}></span>
                        <span className={classes.burger_item2}></span>
                        <span className={classes.burger_item3}></span>
                    </div>}
                {isOpen === true ?
                    <div className={classes.burgerMenuOpen}>
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