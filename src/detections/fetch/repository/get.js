import { client } from 'startup/client'
import { GET_ALL_DETECTIONS } from 'detections/fetch/repository/query'
import { from } from 'rxjs'

export const get = payload => from(client.query({ query: GET_ALL_DETECTIONS, variables: { parameter: payload } }))
