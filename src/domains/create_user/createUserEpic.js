import createUserTypes from './createUserTypes';
import createUserActions from './createUserActions';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { switchMap, withLatestFrom, map, } from 'rxjs/operators';

const createUserEpic = (action$, state$) => action$.pipe(
    ofType(createUserTypes.FETCH_USER_CREATE_START),
    withLatestFrom(state$),
    map(([action, state]) => action.payload.user),
    switchMap((user) => {
        return ajax({
            url: `http://localhost:3000/users/`,
            method: `POST`,
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
                    console.log('response at createUserEpic', data);
                    return createUserActions.FETCH_USER_CREATE_SUCCESS(data.response)
                }),
            )
    })
)


export default createUserEpic;