import { from } from 'rxjs'

import { client } from 'startup/client'
import { GET_ALL_CAMERAS } from 'cameras/repository/query'

export const get = payload => from(client.query({
  query: GET_ALL_CAMERAS,
  variables: { parameter: payload },
}))
