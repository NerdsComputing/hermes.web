import { from } from 'rxjs'

import { GET_DETECTIONS } from 'detections/fetch/repository/query'
import { client } from 'startup/client'

export const get = payload => from(client().query({ query: GET_DETECTIONS, variables: { parameter: payload } }))
