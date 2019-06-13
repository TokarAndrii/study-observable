import editUserTypes from './editUserTypes';

const FETCH_USER_GET_BEFORE_EDIT_START = id => ({
    type: editUserTypes.FETCH_USER_GET_BEFORE_EDIT_START,
    payload: { id }
});

const FETCH_USER_GET_BEFORE_EDIT_SUCCESS = user => ({
    type: editUserTypes.FETCH_USER_GET_BEFORE_EDIT_SUCCESS,
    payload: { user }
});

const FETCH_USER_EDIT_START = user => ({
    type: editUserTypes.FETCH_USER_EDIT_START,
    payload: { user }
});

const FETCH_USER_EDIT_SUCCESS = user => ({
    type: editUserTypes.FETCH_USER_EDIT_SUCCESS,
    payload: { user }
});

const FETCH_USER_EDIT_FAILED = error => ({
    type: editUserTypes.FETCH_USER_EDIT_FAILED,
    payload: { error }
})


export default {
    FETCH_USER_GET_BEFORE_EDIT_START,
    FETCH_USER_GET_BEFORE_EDIT_SUCCESS,
    FETCH_USER_EDIT_START,
    FETCH_USER_EDIT_SUCCESS,
    FETCH_USER_EDIT_FAILED
}