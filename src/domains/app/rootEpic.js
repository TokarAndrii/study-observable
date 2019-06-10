import { combineEpics } from 'redux-observable';
import usersEpic from '../users/usersEpic';
import {
    userEdiGetBeforeUpdateEpic,
    userEditEpic
} from '../edit_user/editUserEpic';

const rootEpic = combineEpics(usersEpic, userEdiGetBeforeUpdateEpic, userEditEpic);


export default rootEpic;