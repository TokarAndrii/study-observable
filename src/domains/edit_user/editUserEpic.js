import editUserTypes from './editUserTypes';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import userEditActions from './editUserActions';
import { switchMap, withLatestFrom, map, } from 'rxjs/operators';

export const userEdiGetBeforeUpdateEpic = (action$, state$) => action$.pipe(
    ofType(editUserTypes.FETCH_USER_GET_BEFORE_EDIT_START),
    withLatestFrom(state$),
    map(([action, state]) => state.edit.user_edit),
    switchMap((user_edit) => {
        return ajax.getJSON(`http://localhost:3000/users/${user_edit}`)
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
        console.log('state', state);
        console.log('action', action)
        return action.payload.user
    }),
    switchMap(user => {
        console.log('id at userEditEpic', user.id);
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
                    console.log('response at userEditEpic', data.response)
                    return userEditActions.FETCH_USER_EDIT_SUCCESS({ ...data.response })
                }),
            )
    }),
)


