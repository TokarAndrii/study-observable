import usersTypes from '../users/usersTypes';
import errorTypes from './errorTypes';

const FETCH_USERS_FAILED = () => ({
    type: usersTypes.FETCH_USERS_FAILED,
});

const CLOSE_ERROR = () => ({
    type: errorTypes.CLOSE_ERROR
})


export default { FETCH_USERS_FAILED, CLOSE_ERROR }