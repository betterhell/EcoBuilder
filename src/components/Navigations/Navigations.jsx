import React from 'react';
import classes from "./_Navigations.module.scss"
import {navList} from "./navList";

class Navigations extends React.Component {
    render() {
        return (
            <div className={classes.navigationsWrapper}>
                {navList.map((item, id) =>
                    <a
                        className={classes.navigations_item}
                        key={id}
                        href={item.path}>{item.label}</a>
                   )
                }
            </div>
        );
    }
}

export default Navigations;