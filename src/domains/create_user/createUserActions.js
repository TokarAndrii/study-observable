import createUserTypes from './createUserTypes';

const FETCH_USER_CREATE_START = user => ({
    type: createUserTypes.FETCH_USER_CREATE_START,
    payload: { user }
});

const FETCH_USER_CREATE_SUCCESS = user => ({
    type: createUserTypes.FETCH_USER_CREATE_SUCCESS,
    payload: { user }
});

const FETCH_USER_CREATE_FAILED = error => ({
    type: createUserTypes.FETCH_USER_CREATE_FAILED,
    payload: { error }
})


export default {
    FETCH_USER_CREATE_START, FETCH_USER_CREATE_SUCCESS,
    FETCH_USER_CREATE_FAILED,
}