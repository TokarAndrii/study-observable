import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './rootReducer';
import rootEpic from './rootEpic.js'

const epicMiddleware = createEpicMiddleware();

const middlewares = applyMiddleware(epicMiddleware);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

epicMiddleware.run(rootEpic);

export default store;