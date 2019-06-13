import createUserTypes from './createUserTypes';
import createUserActions from './createUserActions';
import { of } from 'rxjs';
import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { switchMap, withLatestFrom, map, catchError, } from 'rxjs/operators';
import { protocol, host, port, users } from '../../configs/axiosConf';

const createUserEpic = (action$, state$) => action$.pipe(
    ofType(createUserTypes.FETCH_USER_CREATE_START),
    withLatestFrom(state$),
    map(([action,]) => action.payload.user),
    switchMap((user) => {
        return ajax({
            url: `${protocol}://${host}:${port}/${users}/`,
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
                    return createUserActions.FETCH_USER_CREATE_SUCCESS(data.response)
                }),
                catchError(({ message: error }) => {
                    return of({
                        type: createUserTypes.FETCH_USER_CREATE_FAILED,
                        payload: { error }
                    })

                }),
            )
    })
)


export default createUserEpic;