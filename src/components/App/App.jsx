import React from 'react';
import classes from "./App.module.scss"
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";

class App extends React.Component {
    render() {
        return (
            <div className={classes.wrapper}>
                <Header/>
                <MainContent/>
            </div>
        );
    }
}

export default App;