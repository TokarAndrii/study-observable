import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../components/button/StyledButton';
import Input from '../../components/input/StyledInput';
import userCreateActions from './createUserActions';
import routes from '../../configs/routes';

const INITIAL_STATE = {
    firstName: '',
    secondName: '',
    photo: '',
    email: '',
    phone: '',
    website: '',
    companyName: '',
    city: '',
}

class CreateUserForm extends Component {
    state = { ...INITIAL_STATE }

    handleSubmit = e => {
        e.preventDefault();
        console.log('handleSubmit at CreateUserForm');
        const { firstName, secondName, photo, email, website,
            city, companyName, phone, } = this.state;
        const { addUser, history, } = this.props;
        if (firstName && secondName && email && phone &&
            photo && website && companyName && city) {
            const user = {
                firstName, secondName, photo, email,
                website, city, companyName, phone,
            }

            history.push(routes.USERS);

            return addUser(user);

        }

        alert("Please, fill all fields");

    }

    handleChangeInput = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    render() {
        const { firstName, secondName, email, website, photo,
            phone, city, companyName } = this.state;
        const { className, } = this.props;
        return (
            <div className={className}>
                <h1>Create user form</h1>
                <form onSubmit={this.handleSubmit}>
                    <Input labelTxt="First Name" name="firstName" inputValue={firstName} handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Second Name" name="secondName" inputValue={secondName} handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Email" name="email" inputValue={email} handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Phone" name="phone" inputValue={phone} handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Photo" name="photo" inputValue={photo} handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Website" name="website" inputValue={website} handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="City" name="city" inputValue={city} handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Company" name="companyName" inputValue={companyName} handleChange={this.handleChangeInput}></Input>
                    <Button text="Add user" btnType="submit"></Button>
                </form>
            </div>
        )
    }
};

const mdtp = {
    addUser: userCreateActions.FETCH_USER_CREATE_START
}


export default connect(null, mdtp)(CreateUserForm);