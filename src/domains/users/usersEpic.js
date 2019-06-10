import usersTypes from './usersTypes'
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { switchMap, takeUntil, map } from 'rxjs/operators';
import usersActions from './usersActions'

const usersEpic = (action$, ) => action$.pipe(
    ofType(usersTypes.FETCH_USERS_START),
    switchMap(() => ajax.getJSON('http://localhost:3000/users')
        .pipe(
            map(response => {
                console.log('response', response)
                return usersActions.FETCH_USERS_SUCCESS(response)
            }),
            takeUntil(action$.pipe(
                ofType(usersTypes.FETCH_USERS_FAILED)
            ))
        ))

);


export default usersEpic;