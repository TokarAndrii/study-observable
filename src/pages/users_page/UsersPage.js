import React from 'react';
import UserList from '../../domains/users/StyledUserList';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectors from '../../domains/app/selectors';
import routes from '../../configs/routes';

const UsersPage = ({ className, isLoading }) => (
    <div className={className}>
        <div className="linksHolder">
            <Link to={routes.INDEX}>Home</Link>
        </div>
        {!isLoading && <UserList></UserList>}
    </div>
);

const mstp = state => ({
    isLoading: selectors.getIsLoading(state),
});


export default connect(mstp)(UsersPage);