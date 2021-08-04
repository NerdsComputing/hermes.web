import { from } from 'rxjs'

import { Client } from 'startup/client'
import { GET_CAMERAS } from 'cameras/repository/query'

export const get = payload => from(Client().query({
  query: GET_CAMERAS,
  variables: { parameter: payload },
}))
