import { useHistory } from 'react-router-dom'
import { useCallback } from 'react'

export const useNavigation = path => {
  const history = useHistory()

  return useCallback(() => history.push(path), [history, path])
}
