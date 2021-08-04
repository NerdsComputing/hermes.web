import { client } from 'startup/client'
import { from } from 'rxjs'

import { GET_DETECTIONS } from 'detections/fetch/repository/query'

export const get = payload => from(client.query({ query: GET_DETECTIONS, variables: { parameter: payload } }))
