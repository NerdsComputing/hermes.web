import { Error } from 'detection/error'
import { Loading } from 'detection/loading'
import { Card } from 'detection/card'

export const useContent = () => ({
  success: Card,
  failure: Error,
  loading: Loading,
})
