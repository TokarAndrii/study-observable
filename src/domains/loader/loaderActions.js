import usersTypes from '../domains/users/usersTypes';

const FETCH_USERS_FAILED = error => ({
    type: usersTypes.FETCH_USERS_FAILED,
    payload: error
});


const FETCH_USERS_SUCCESS = () => ({
    type: usersTypes.FETCH_USERS_SUCCESS,
});

export default { FETCH_USERS_FAILED, FETCH_USERS_SUCCESS }