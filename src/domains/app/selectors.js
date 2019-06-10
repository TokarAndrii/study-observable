import * as R from 'ramda';

//const getIsLoading = state => state.isLoading;
const getIsLoading = R.pathOr(false, ["isLoading"]);
const getEditUser = R.pathOr({}, ["edit", "user_edit"]);
const getIsEditUser = R.pathOr({}, ["edit", "isEdited"]);
const getUsers = R.pathOr({}, ["users"]);

export default {
    getIsLoading, getEditUser, getUsers,
    getIsEditUser
};