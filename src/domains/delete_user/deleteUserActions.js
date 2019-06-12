import userDeleteTypes from './deleteUserTypes';

const FETCH_USER_DELETE_START = id => ({
    type: userDeleteTypes.FETCH_USER_DELETE_START,
    payload: { id }
});

const FETCH_USER_DELETE_SUCCESS = id => ({
    type: userDeleteTypes.FETCH_USER_DELETE_SUCCESS,
    payload: { id }
})


export default {
    FETCH_USER_DELETE_START,
    FETCH_USER_DELETE_SUCCESS
}