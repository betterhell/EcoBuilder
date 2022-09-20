import React from 'react';
import classes from "./_ContactUs.module.scss"
import Form from "../Form/Form";


class ContactUs extends React.Component {
    render() {
        return (
            <div className={classes.contactUsWrapper}>
              <Form />
            </div>
        );
    }
}

export default ContactUs;