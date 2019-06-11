import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../components/input/StyledInput';
import Button from '../../components/button/StyledButton';
import editUserActions from './editUserActions';
import selectors from '../app/selectors';
import usersActions from '../users/usersActions';

const INITIAL_STATE = {
    firstName: '',
    secondName: '',
    photo: '',
    email: '',
    phone: '',
    website: '',
    companyName: '',
    city: '',
    id: ''
}

class EditUser extends Component {
    state = { ...INITIAL_STATE }

    handleChangeInput = ({ target }) => {
        const { name, value } = target;
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { editUser, } = this.props;
        console.log('handleSubmit');
        const { firstName, secondName, photo, email, website,
            city, companyName, phone, id } = this.state;
        const user = {
            firstName, secondName, photo, email,
            website, city, companyName, phone, id
        }
        editUser(user);

    }

    componentDidMount() {
        const { userId, getUserById } = this.props;
        getUserById(userId);
    }

    componentDidUpdate(prevProps, ) {
        console.log('componentDidUpdate EditUser')
        const { getUsers, } = this.props;
        if (prevProps.user_edit !== this.props.user_edit) {
            const { user_edit: { firstName = "" } } = this.props;
            const { user_edit: { secondName = "" } } = this.props;
            const { user_edit: { photo = "" } } = this.props;
            const { user_edit: { email = "" } } = this.props;
            const { user_edit: { phone = "" } } = this.props;
            const { user_edit: { website = "" } } = this.props;
            const { user_edit: { address: { city = "" } = {} } } = this.props;
            const { user_edit: { company: { name: companyName = "" } = {} } } = this.props;
            const { userId: id } = this.props;

            this.setState({
                firstName, secondName, photo, email,
                phone, website, city, companyName, id
            })
            getUsers();
        }
    }
    render() {
        const { firstName, secondName, photo, email, website,
            city, companyName, phone } = this.state;
        const { className, userId } = this.props;
        return (
            <div className={className}>
                <h1>Edit user with ID:{userId} form</h1>
                <form>
                    <Input labelTxt="First Name" inputValue={firstName} name="firstName" handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Second Name" inputValue={secondName} name="secondName" handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Photo" name="photo" inputValue={photo} handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Email" name="email" inputValue={email} handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Phone" name="phone" inputValue={phone} handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Address City" name="city" inputValue={city} handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Website" name="website" inputValue={website} handleChange={this.handleChangeInput}></Input>
                    <Input labelTxt="Company" name="companyName" inputValue={companyName} handleChange={this.handleChangeInput}></Input>
                    <Button type="submit" text="Edit User" handleClick={this.handleSubmit}></Button>
                </form>
            </div>
        )
    };
}

const mdtp = {
    getUserById: editUserActions.FETCH_USER_GET_BEFORE_EDIT_START,
    editUser: editUserActions.FETCH_USER_EDIT_START,
    getUsers: usersActions.FETCH_USERS_START,
}

const mstp = state => ({
    user_edit: selectors.getEditUser(state),
    isUserEdited: selectors.getIsEditUser(state),
})

export default connect(mstp, mdtp)(EditUser);