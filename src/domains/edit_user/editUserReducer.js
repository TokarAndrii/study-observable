import userEditTypes from './editUserTypes';

const editUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case userEditTypes.FETCH_USER_GET_BEFORE_EDIT_START:
            return payload.id;
        case userEditTypes.FETCH_USER_GET_BEFORE_EDIT_SUCCESS:
        case userEditTypes.FETCH_USER_EDIT_SUCCESS:
        case userEditTypes.FETCH_USER_EDIT_START:
            return payload.user;
        default: return state;
    }
};


export default editUserReducer;