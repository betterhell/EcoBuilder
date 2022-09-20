import React from 'react';
import classes from "./_Form.module.scss"
import Button from "../Button/Button";

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            buttonLabel: "Sends message"
        }
    }

    render() {
        return (
            <div className={classes.formWrapper}>

                <div className={classes.formHeader}>
                    <h2>Let’s talk</h2>
                </div>

                <div className={classes.formContainer}>
                    <form action="post">
                        <input required={true} placeholder="Enter your email" className={classes.emailInput} type="email"/>
                        <input required={true} placeholder="Enter your full name" className={classes.nameInput} type="text"/>
                        <textarea required={true} maxLength="120" placeholder="Enter message..." className={classes.textInput}></textarea>
                        <Button buttonLabel={this.state.buttonLabel} />
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;