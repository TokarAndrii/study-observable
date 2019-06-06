import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes'

const HomePage = ({ className }) => (
    <div className={className}>
        <div className="linksHolder">
            <Link to={routes.USERS}>users page</Link>
        </div>
        <h1>This is CRUD app with usage: react, redux, redux-observable, styled-components, ramda and other</h1>
    </div>
);

export default HomePage;