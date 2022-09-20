import React from 'react';
import {aboutCardsList} from "./AboutCardsList"
import classes from "./_AboutCard.module.scss"


class AboutCard extends React.Component {
    render() {
        return (
            <div className={classes.aboutCardWrapper}>
                {aboutCardsList.map((card, id) =>
                    <div className={classes.cardWrapper} key={id}>
                        <div className={classes.cardHeader}>
                            <img src={card.image} alt={card.image}/>
                            <h3>{card.label}</h3>
                        </div>
                        <div className={classes.cardDesc}>
                            <p>{card.desc}</p>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default AboutCard;