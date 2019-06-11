import usersTypes from './usersTypes';
import createUserTypes from '../create_user/createUserTypes';

const usersReducers = (state = [], { type, payload }) => {
    switch (type) {
        case createUserTypes.FETCH_USER_CREATE_SUCCESS:
            return [...state, payload.user];
        case (usersTypes.FETCH_USERS_SUCCESS): return payload.users;
        default: return state;
    }
};


export default usersReducers;