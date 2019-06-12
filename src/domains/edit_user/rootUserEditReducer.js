import { combineReducers } from 'redux';
import userEditReducer from './editUserReducer';

const rootUserEditReducer = combineReducers({
    user_edit: userEditReducer,
});

export default rootUserEditReducer;
