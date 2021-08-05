import { from } from 'rxjs'
import { map } from 'rxjs/operators'

import { GET_DETECTIONS } from 'detections/fetch/repository/query'
import { client } from 'startup/client'

export const get = payload => from(client().query({ query: GET_DETECTIONS, variables: { parameter: payload } }))
  .pipe(map(result => result.data.detections))
