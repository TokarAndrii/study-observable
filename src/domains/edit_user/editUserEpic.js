import editUserTypes from './editUserTypes';
import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import userEditActions from './editUserActions';
import { switchMap, withLatestFrom, map, catchError, } from 'rxjs/operators';
import { protocol, host, port, users } from '../../configs/axiosConf';

export const userEdiGetBeforeUpdateEpic = (action$, state$) => action$.pipe(
    ofType(editUserTypes.FETCH_USER_GET_BEFORE_EDIT_START),
    withLatestFrom(state$),
    map(([action, state]) => state.edit.user_edit),
    switchMap((user_edit) => {
        return ajax.getJSON(`${protocol}://${host}:${port}/${users}/${user_edit}`)
            .pipe(
                map(response => {
                    return userEditActions.FETCH_USER_GET_BEFORE_EDIT_SUCCESS(response)
                }),
            )
    })
);


export const userEditEpic = (action$, state$) => action$.pipe(
    ofType(editUserTypes.FETCH_USER_EDIT_START),
    withLatestFrom(state$),
    map(([action, state]) => {
        return action.payload.user
    }),
    switchMap(user => {
        return ajax({
            url: `http://localhost:3000/users/${user.id}`,
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: {
                firstName: user.firstName,
                secondName: user.secondName,
                photo: user.photo,
                email: user.email,
                phone: user.phone,
                website: user.website,
                address: { city: user.city },
                company: { name: user.companyName }
            }
        })
            .pipe(
                map(data => {
                    return userEditActions.FETCH_USER_EDIT_SUCCESS({ ...data.response })
                }),
                catchError(({ message: error }) => {
                    return of({
                        type: editUserTypes.FETCH_USER_EDIT_FAILED,
                        payload: { error }
                    })

                }),
            )
    }),
)


