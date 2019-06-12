import usersTypes from './usersTypes';
import createUserTypes from '../create_user/createUserTypes';
import deleteUserTypes from '../delete_user/deleteUserTypes';

const usersReducers = (state = [], { type, payload }) => {
    switch (type) {
        case createUserTypes.FETCH_USER_CREATE_SUCCESS:
            return [...state, payload.user];
        case (usersTypes.FETCH_USERS_SUCCESS): return payload.users;
        case deleteUserTypes.FETCH_USER_DELETE_SUCCESS:
            return state.filter(curr => curr.id !== payload.id)
        default: return state;
    }
};


export default usersReducers;