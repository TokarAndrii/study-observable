import React from 'react';
import Button from '../components/button/StyledButton';
import { connect } from 'react-redux';

const UsersList = ({ className, users = [] }) => (
    <div className={className}>
        <Button text="Get Users" />
        <ul >
            {users.length > 0 && <h3>Users List</h3>}
            {users.map(user => (
                <li key={user.id}>
                    <p>{user.firstName}</p>
                </li>
            ))}
        </ul>
    </div>
);
const mstp = state => ({
    users: state.users
})

export default connect(mstp)(UsersList);

