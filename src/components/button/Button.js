import React from 'react';
import { connect } from 'react-redux';
import userActions from '../../users/usersActions';


const Button = ({ className, text = "button text", getUsers, btnType = "button" }) => (
    <button type={btnType} onClick={getUsers} className={className}>{text}</button>
);

const mdtp = {
    getUsers: userActions.FETCH_USERS_START
}


export default connect(null, mdtp)(Button);