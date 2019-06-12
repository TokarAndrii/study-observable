import { combineEpics } from 'redux-observable';
import usersEpic from '../users/usersEpic';
import createUserEpic from '../create_user/createUserEpic';
import {
    userEdiGetBeforeUpdateEpic,
    userEditEpic
} from '../edit_user/editUserEpic';
import deleteUserEpic from '../delete_user/deleteUserEpic';

const rootEpic =
    combineEpics(usersEpic, userEdiGetBeforeUpdateEpic,
        userEditEpic, createUserEpic, deleteUserEpic
    );


export default rootEpic;