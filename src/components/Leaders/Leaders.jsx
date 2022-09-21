import React from 'react';
import {leaderList} from "./LeaderList";
import classes from "./_Leaders.module.scss"

class Leaders extends React.Component {
    render() {
        return (
            <div className={classes.leadersWrapper}>
                {leaderList.map((leader, id) =>
                  <div className={classes.leader} key={id}>
                      <img className={classes.leaderPhoto} src={leader.image} alt={leader.image}/>
                      <h3 className={classes.leaderName}>{leader.name}</h3>
                      <p className={classes.leaderPost}>{leader.post}</p>
                      <div className={classes.leaderSocials}>
                            {leader.social.map((social, id) =>
                                <a key={id} href={social.link}><img src={social.image} alt={social.image}/></a>
                            )}
                      </div>
                  </div>
                )}
            </div>
        );
    }
}

export default Leaders;