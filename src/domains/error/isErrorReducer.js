import usersTypes from '../users/usersTypes';
import errorTypes from './errorTypes';
import userCreateTypes from '../create_user/createUserTypes';
import userEdittypes from '../edit_user/editUserTypes';

const isErrorReducer = (state = false, { type, }) => {
    switch (type) {
        case errorTypes.CLOSE_ERROR:
            return false;
        case usersTypes.FETCH_USERS_FAILED:
        case userCreateTypes.FETCH_USER_CREATE_FAILED:
        case userEdittypes.FETCH_USER_EDIT_FAILED:
            return true;
        default: return state;
    }
};


export default isErrorReducer;