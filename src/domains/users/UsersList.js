import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/button/StyledButton';
import { connect } from 'react-redux';
import routes from '../../configs/routes';

const UsersList = ({ className, users = [] }) => (
    <div className={className}>
        <Button text="Get Users" />
        <ul >
            {users.length > 0 && (
                <>
                    <h3>Users List</h3>
                    <li className="userDetailsHeaderRow">
                        <span className="userDetailsHeaderID"><b>ID</b></span>
                        <span className="userDetailsHeader"><b>First Name</b></span>
                        <span className="userDetailsHeader"><b>Second Name</b></span>
                        <span className="userDetailsHeader"><b>Email</b></span>
                        <span className="userDetailsHeader"><b>Phone</b></span>
                        <span className="userDetailsHeader"><b>Website</b></span>
                        <span className="userDetailsHeader"><b>Address City</b></span>
                        <span className="userDetailsHeader"><b>Company</b></span>
                        <span className="userDetailsHeader actions"><b>Actions</b></span>
                    </li>
                </>
            )}
            {users.map(user => (
                <li key={user.id} className="userDetailsRow">
                    <span className="userDetailsID">{user.id}</span>
                    <span className="userDetails">{user.firstName}</span>
                    <span className="userDetails">{user.secondName}</span>
                    <span className="userDetails">{user.email}</span>
                    <span className="userDetails">{user.phone}</span>
                    <span className="userDetails">{user.website}</span>
                    <span className="userDetails">{user.address.city}</span>
                    <span className="userDetails">{user.company.name}</span>
                    <span className="userDetails actions">
                        <button className="userDetailsBtn">Remove</button>
                        <button className="userDetailsBtn"><Link className="link" to={`${routes.USERS}/${user.id}`}>Details</Link></button>
                        <button className="userDetailsBtn"><Link className="link" to={`${routes.USERS_EDIT}/${user.id}`}>Edit</Link></button>
                    </span>
                </li>
            ))}
        </ul>
    </div>
);
const mstp = state => ({
    users: state.users
})

export default connect(mstp)(UsersList);

