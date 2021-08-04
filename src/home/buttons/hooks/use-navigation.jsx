import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

export const useNavigation = path => {
  const history = useHistory()

  return useCallback(() => history.push(path), [history, path])
}
