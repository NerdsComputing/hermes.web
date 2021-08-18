import { ofType } from 'redux-observable'
import { catchError, mergeMap } from 'rxjs/operators'
import { of } from 'rxjs'

import { actions } from 'detections/slices/get'
import { repository } from 'detections/repository'

export const get = actions$ => actions$
  .pipe(ofType(actions.attempt))
  .pipe(mergeMap(execute))

const execute = ({ payload }) => repository.get(payload)
  .pipe(mergeMap(success))
  .pipe(catchError(failure))

const success = payload => of(actions.success(payload))

const failure = payload => of(actions.failure(payload))
