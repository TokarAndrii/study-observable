import { combineEpics } from 'redux-observable';
import usersEpic from '../users/usersEpic';

const rootEpic = combineEpics(usersEpic);


export default rootEpic;