import React from 'react';
import classes from "./App.module.scss"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

class App extends React.Component {
    render() {
        return (
            <div className={classes.wrapper}>
                <Header/>
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;