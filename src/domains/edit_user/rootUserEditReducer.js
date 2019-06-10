import { combineReducers } from 'redux';
import isUserEditedReducer from './isUserEditedReducer';
import userEditReducer from './editUserReducer';

const rootUserEditReducer = combineReducers({
    isEdited: isUserEditedReducer,
    user_edit: userEditReducer,
});

export default rootUserEditReducer;
