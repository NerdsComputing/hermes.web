import { of } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import { actions } from 'sounds/slices/get'
import { repository } from 'sounds/repository'

export const get = actions$ => actions$
  .pipe(ofType(actions.attempt))
  .pipe(mergeMap(payload => execute(payload)))

const execute = ({ payload }) => repository.get(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

const success = payload => of(actions.success(payload))

const failure = payload => of(actions.failure(payload))
