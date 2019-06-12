import deletUserTypes from './deleteUserTypes';
import deleteUserActions from './deleteUserActions';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { switchMap, withLatestFrom, map, } from 'rxjs/operators';

const deleteUserEpic = (action$, state$) => action$.pipe(
    ofType(deletUserTypes.FETCH_USER_DELETE_START),
    withLatestFrom(state$),
    map(([action, state]) => action.payload.id),
    switchMap((id) => {
        return ajax({
            url: `http://localhost:3000/users/${id}`,
            method: `DELETE`,
        })
            .pipe(
                map(data => {
                    console.log('response at deleteUserEpic', data);
                    return deleteUserActions.FETCH_USER_DELETE_SUCCESS(id)
                }),
            )
    })
)


export default deleteUserEpic;