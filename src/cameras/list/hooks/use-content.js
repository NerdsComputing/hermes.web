import { Content } from 'cameras/list/content'
import { Loading } from 'cameras/list/loading'
import { Error } from 'cameras/list/error'

export const useContent = () => ({
  success: Content,
  failure: Error,
  loading: Loading,
})
