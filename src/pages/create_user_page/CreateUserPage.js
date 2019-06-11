import React from 'react';
import CreateUserForm from '../../domains/create_user/StyledCreateUserForm';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';


const CreateUserPage = ({ className, history }) => (
    <div className={className}>
        <div className="linksHolder">
            <Link to={routes.USERS}>USERS PAGE</Link>
        </div>
        <CreateUserForm history={history}></CreateUserForm>
    </div>
);


export default CreateUserPage;