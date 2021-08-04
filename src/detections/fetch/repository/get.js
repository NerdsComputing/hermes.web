import { from } from 'rxjs'

import { GET_DETECTIONS } from 'detections/fetch/repository/query'
import { Client } from 'startup/client'

export const get = payload => from(Client().query({ query: GET_DETECTIONS, variables: { parameter: payload } }))
