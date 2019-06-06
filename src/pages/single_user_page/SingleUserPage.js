import React from 'react';
import SingleUser from '../../domains/single_user/StyledSingleUser';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../../domains/loader/Spinner';
import routes from '../../configs/routes';
import selectors from '../../domains/app/selectors';

const SingleUserPage = ({ className, isLoading, match: { params: { id: userId } } }) => (
    <div className={className}>
        <div className="linksHolder">
            <Link to={routes.USERS}>USERS PAGE</Link>
            <Link to={routes.INDEX}>HOME</Link>
        </div>
        {isLoading && <Spinner></Spinner>}
        {!isLoading && <SingleUser className={className} id={userId}></SingleUser>}

    </div>
);

const mstp = state => ({
    isLoading: selectors.getIsLoading(state)
})

export default connect(mstp)(SingleUserPage);