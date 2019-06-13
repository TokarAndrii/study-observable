import { pathOr } from 'ramda';

const getIsLoading = pathOr(false, ["isLoading"]);
const getEditUser = pathOr({}, ["edit", "user_edit"]);
const getIsEditUser = pathOr({}, ["edit", "isEdited"]);
const getUsers = pathOr({}, ["users"]);
const isError = pathOr(false, ["error", "isError"]);
const getErrorMessage = pathOr(false, ["error", "errorMessage"]);

export default {
    getIsLoading, getEditUser, getUsers,
    getIsEditUser, isError, getErrorMessage,
};