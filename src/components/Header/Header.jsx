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
            emailPlaceholder: "Введите свой email",
            passwordPlaceholder: "Введите пароль"
        }
        this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this)
    }

    toggleBurgerMenu() {
      if (!this.state.isOpen) {
          this.setState({
              isOpen: true
          })
      } else {
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

        return (
                <div className={classes.headerWrapper}>
                    <Logo />
                        {screenWidth >= 720
                            ? <Navigations />
                            : <BurgerMenu isOpen={this.state.isOpen} toggleBurger={() => this.toggleBurgerMenu()} />
                        }
                        {screenWidth >= 720
                            ? <Button passwordPlaceholder={this.state.passwordPlaceholder} emailPlaceholder={this.state.emailPlaceholder} isOpen={this.state.isOpen} toggleModal={() => this.toggleBurgerMenu()}  buttonLabel={this.state.buttonLabel} />
                            : null}
                </div>
        );
    }
}

export default Header;