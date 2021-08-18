import { from } from 'rxjs'
import { map } from 'rxjs/operators'

import { GET_DETECTION } from 'detection/repository/query'
import { client } from 'startup/client'

const buildQuery = payload => ({
  query: GET_DETECTION,
  variables: { parameter: payload },
})

export const get = payload => from(client().query(buildQuery(payload)))
  .pipe(map(result => result.data.detections))
  .pipe(map(result => result.items[0]))
