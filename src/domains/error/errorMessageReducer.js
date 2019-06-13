import usersTypes from '../users/usersTypes';
import errorTypes from './errorTypes';
import userCreateTypes from '../create_user/createUserTypes';
import userEdittypes from '../edit_user/editUserTypes';

const errorMessageReducer = (state = '', { type, payload }) => {
    switch (type) {
        case errorTypes.CLOSE_ERROR:
            return '';
        case usersTypes.FETCH_USERS_FAILED:
        case userCreateTypes.FETCH_USER_CREATE_FAILED:
        case userEdittypes.FETCH_USER_EDIT_FAILED:
            return payload.error;
        default: return state;
    }
};

export default errorMessageReducer;