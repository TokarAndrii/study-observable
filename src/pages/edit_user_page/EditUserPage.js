import React from 'react';
import { Link } from 'react-router-dom';
import EditUser from '../../domains/edit_user/StyledEditUser';
import routes from '../../configs/routes';

const EditUserPage = ({ className, match: { params: { id: userId } } }) => console.log('userId', userId) || (
    <div className={className}>
        <div className="linksHolder">
            <Link to={routes.USERS}>USERS PAGE</Link>
            <Link to={routes.INDEX}>HOME</Link>
        </div>
        <EditUser userId={userId}></EditUser>
    </div>
);

export default EditUserPage;