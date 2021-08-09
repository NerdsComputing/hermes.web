import { from } from 'rxjs'
import { map } from 'rxjs/operators'

import { client } from 'startup/client'
import { GET_CAMERAS } from 'cameras/repository/query'

const buildQuery = payload => ({
  query: GET_CAMERAS,
  variables: { parameter: payload },
})

export const get = payload => from(client().query(buildQuery(payload)))
  .pipe(map(({ data }) => data.cameras))
