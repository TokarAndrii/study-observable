import usersTypes from './usersTypes';

const FETCH_USERS_SUCCESS = users => ({
    type: usersTypes.FETCH_USERS_SUCCESS,
    payload: { users }
});

const FETCH_USERS_START = () => ({
    type: usersTypes.FETCH_USERS_START,
});


export default { FETCH_USERS_SUCCESS, FETCH_USERS_START };