import usersTypes from './usersTypes';
import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { switchMap, takeUntil, map, catchError } from 'rxjs/operators';
import usersActions from './usersActions';
import { randomString } from '../../utils/ajaxRandomFaker';
import { protocol, host, port, users } from '../../configs/axiosConf';

const usersEpic = (action$, ) => action$.pipe(
    ofType(usersTypes.FETCH_USERS_START),
    switchMap(() => ajax.getJSON(`${protocol}://${host}:${port}/${randomString(users)}`)
        .pipe(
            map(response => {
                return usersActions.FETCH_USERS_SUCCESS(response)
            }),
            catchError(({ message: error }) => {
                return of({
                    type: usersTypes.FETCH_USERS_FAILED,
                    payload: { error }
                })

            }),
            takeUntil(action$.pipe(
                ofType(usersTypes.FETCH_USERS_FAILED)
            ))
        ))

);


export default usersEpic;