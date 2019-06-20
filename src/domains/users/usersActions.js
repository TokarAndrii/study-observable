import usersTypes from './usersTypes';
import { curry, zipObj, assocPath } from 'ramda';


//Usual way
// const FETCH_USERS_SUCCESS = users => ({
//     type: usersTypes.FETCH_USERS_SUCCESS,
//     payload: { users }
// });
const FETCH_USERS_SUCCESS = curry(
    users => assocPath(
        ["payload", "users"], users, zipObj(["type"], [usersTypes.FETCH_USERS_SUCCESS])
    )
);


//Usual way
// const FETCH_USERS_START = () => ({
//     type: usersTypes.FETCH_USERS_START,
// });
const FETCH_USERS_START = curry(
    () => zipObj(["type"], [usersTypes.FETCH_USERS_START])
)


//Usual way
// const FETCH_USERS_FAILED = error => ({
//     type: usersTypes.FETCH_USERS_FAILED,
//     payload: { error }
// });
const FETCH_USERS_FAILED = curry(
    error => assocPath(
        ["payload", "error"], error, zipObj(["type"], [usersTypes.FETCH_USERS_FAILED])
    )
)


export default {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_START,
    FETCH_USERS_FAILED,
};