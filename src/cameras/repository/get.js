import { from } from 'rxjs'

import { client } from 'startup/client'
import { GET_CAMERAS } from 'cameras/repository/query'

export const get = payload => from(client.query({
  query: GET_CAMERAS,
  variables: { parameter: payload },
}))
