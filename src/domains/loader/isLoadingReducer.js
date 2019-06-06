import userTypes from '../users/usersTypes';

const isLoadingReducer = (state = false, { type, payload }) => {
    switch (type) {
        case userTypes.FETCH_USERS_START: return true;
        case userTypes.FETCH_USERS_FAILED: return payload.error;
        case userTypes.FETCH_USERS_SUCCESS: return false;
        default: return state;
    }
};


export default isLoadingReducer;