import React from 'react';
import classes from "./_Header.module.scss"
import Navigations from "../Navigations/Navigations";
import Logo from "../Logo/Logo";
import Button from "../Button/Button";
import BurgerMenu from "../BurgerMenu/BurgerMenu";


class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonLabel: "Log in",
            width: 0,
            isOpen: false,
        }
        this.handleOpenBurgerMenu = this.handleOpenBurgerMenu.bind(this)
    }

    handleOpenBurgerMenu() {
      if (this.state.isOpen === false) {
          this.setState({
              isOpen: true
          })
          this.setState({
              isOpen: false
          })
      }
    }

    updateDimensions = () => {
        this.setState({ width: window.innerWidth});
    };

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }


    render() {
        const screenWidth = window.innerWidth

        // function wideScreenContent(screenWidth) {
        //     if (screenWidth > 720) {
        //         return <Navigations /> && <Button buttonLabel={this.state.buttonLabel}/>
        //     }
        //     return <BurgerMenu isOpen={this.state.isOpen} toggleBurger={this.handleOpenBurgerMenu} />
        // }

        return (
                <div className={classes.headerWrapper}>
                    <Logo />
                        {screenWidth >= 720
                            ? <Navigations />
                            : <BurgerMenu isOpen={this.state.isOpen} toggleBurger={this.handleOpenBurgerMenu} />
                        }
                        {screenWidth >= 720
                            ? <Button buttonLabel={this.state.buttonLabel} />
                            : null}
                </div>
        );
    }
}

export default Header;