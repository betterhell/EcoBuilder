import React from 'react';
import classes from "./_Buttom.module.scss"
import Modal from "../Modal/Modal";

class Button extends React.Component {
    constructor() {
        super();
    }

    render() {
        const openModal = this.props.toggleModal
        const isOpen = this.props.isOpen
        const emailPlaceholder = this.props.emailPlaceholder
        const passwordPlaceholder = this.props.passwordPlaceholder

        return (
            <div className={classes.buttonWrapper}>
                <button
                  onClick={openModal} className={classes.button}>{this.props.buttonLabel}</button>
                {isOpen === true ? <Modal passwordPlaceholder={passwordPlaceholder} emailPlaceholder={emailPlaceholder}  /> : null}
            </div>
        );
    }
}

export default Button;