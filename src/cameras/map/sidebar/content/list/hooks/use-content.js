import { Content } from 'cameras/map/sidebar/content/list/content'
import { Loading } from 'cameras/map/loading'
import { Error } from 'cameras/map/error'

export const useContent = () => ({
  success: Content,
  failure: Error,
  loading: Loading,
})
