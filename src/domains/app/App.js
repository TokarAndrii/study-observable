import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../loader/Spinner';

import UsersPage from '../../pages/users_page/StyledUsersPage';
import HomePage from '../../pages/home/StyledHomePage';
import SingleUserPage from '../../pages/single_user_page/StyledSingleUserPage';
import EditUserPage from '../../pages/edit_user_page/StyledEditUserPage';
import StyledCreateUserPage from '../../pages/create_user_page/StyledCreateUserPage';

import selectors from './selectors';
import routes from '../../configs/routes';
import Error from '../error/StyledError';


function App({ className, isLoading, isError }) {
  return (
    <div className={className}>
      <div className="App">
        <header className="App-header">
          <a className="App-link" href="https://www.npmjs.com/package/redux-observable"
            rel="noopener noreferrer" target="_blank">
            Redux-observable
          </a>
        </header>
        {!isError && (
          <main>
            <Switch>
              <Route exact path={routes.INDEX} component={HomePage}></Route>
              <Route exact path={routes.USERS} component={UsersPage}></Route>
              <Route exact path={routes.USER_PAGE} component={SingleUserPage}></Route>
              <Route exact path={routes.USER_PAGE_EDIT} component={EditUserPage}></Route>
              <Route exact path={routes.CREATE_USER} component={StyledCreateUserPage}></Route>
            </Switch>
          </main>
        )}
        {isError && <Error></Error>}
        {isLoading && <Spinner />}
      </div>

    </div>
  );
}

const mstp = state => ({
  isLoading: selectors.getIsLoading(state),
  isError: selectors.isError(state),
});


export default connect(mstp)(App);
