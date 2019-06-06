import * as R from 'ramda';

//const getIsLoading = state => state.isLoading;
const getIsLoading = R.pathOr(false, ["isLoading"]);

export default { getIsLoading };