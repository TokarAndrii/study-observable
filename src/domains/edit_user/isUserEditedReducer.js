import editUserTypes from './editUserTypes';

const isUserEditedReducer = (state = false, { type }) => {
    switch (type) {
        case editUserTypes.FETCH_USER_EDIT_FAILED:
        case editUserTypes.FETCH_USER_EDIT_START:
            return false;
        case editUserTypes.FETCH_USER_EDIT_SUCCESS:
            return true;
        default: return state;
    }
};


export default isUserEditedReducer;