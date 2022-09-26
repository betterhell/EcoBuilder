import React from 'react';
import classes from "./_Modal.module.scss"
import Button from "../Button/Button";

class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonLogin: "Войти"
        }
    }

    render() {
        const emailPlaceholder = this.props.emailPlaceholder
        const passwordPlaceholder = this.props.passwordPlaceholder

        return (
            <div className={classes.modalWrapper}>
                <h3>Войти</h3>
                <form action="@mail.com">
                    <input required={true} placeholder={emailPlaceholder} type="email"/>
                    <input required={true} placeholder={passwordPlaceholder} type="password"/>
                    <Button buttonLabel={this.state.buttonLogin} />
                </form>
            </div>
        );
    }
}

export default Modal;