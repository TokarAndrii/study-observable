import usersTypes from './usersTypes';

const usersReducers = (state = [], { type, payload }) => {
    switch (type) {
        case (usersTypes.FETCH_USERS_SUCCESS): return payload.users;
        default: return state;
    }
};


export default usersReducers;