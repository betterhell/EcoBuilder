import React from 'react';
import {navList} from "../Navigations/navList";
import Button from "../Button/Button";
import classes from "./_BurgerNavigations.module.scss"

class BurgerNavigations extends React.Component {
    render() {
        return (
            <div className={classes.burgerNavigationsWrapper}>
                {navList.map((item, id) =>
                    <a
                        className={classes.navigations_item}
                        key={id}
                        href={item.path}>{item.label}</a>
                    )
                }
                <Button buttonLabel="Log in" />
            </div>
        );
    }
}

export default BurgerNavigations;