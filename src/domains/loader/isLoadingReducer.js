import userTypes from '../users/usersTypes';
import editUserTypes from '../edit_user/editUserTypes';
import createUserTypes from '../create_user/createUserTypes';

const isLoadingReducer = (state = false, { type, payload }) => {
    switch (type) {
        case editUserTypes.FETCH_USER_GET_BEFORE_EDIT_START:
        case editUserTypes.FETCH_USER_EDIT_START:
        case userTypes.FETCH_USERS_START:
        case createUserTypes.FETCH_USER_CREATE_START:
            return true;
        case editUserTypes.FETCH_USER_EDIT_SUCCESS:
        case editUserTypes.FETCH_USER_EDIT_FAILED:
        case editUserTypes.FETCH_USER_GET_BEFORE_EDIT_SUCCESS:
        case editUserTypes.FETCH_USER_GET_BEFORE_EDIT_FAILED:
        case userTypes.FETCH_USERS_FAILED:
        case userTypes.FETCH_USERS_SUCCESS:
        case createUserTypes.FETCH_USER_CREATE_SUCCESS:
        case createUserTypes.FETCH_USER_CREATE_FAILED:
            return false;
        default: return state;
    }
};


export default isLoadingReducer;