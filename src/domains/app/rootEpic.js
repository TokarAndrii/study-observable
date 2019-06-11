import { combineEpics } from 'redux-observable';
import usersEpic from '../users/usersEpic';
import createUserEpic from '../create_user/createUserEpic';
import {
    userEdiGetBeforeUpdateEpic,
    userEditEpic
} from '../edit_user/editUserEpic';

const rootEpic =
    combineEpics(usersEpic, userEdiGetBeforeUpdateEpic,
        userEditEpic, createUserEpic
    );


export default rootEpic;