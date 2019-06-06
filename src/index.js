import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './domains/app/StyledApp';
import * as serviceWorker from './serviceWorker';
import store from './domains/app/store';


ReactDOM.render(
    < BrowserRouter>
        <Provider store={store}>
            <Route component={App}></Route>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();
