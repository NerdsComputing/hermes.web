import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

export const useNavigation = props => {
  const history = useHistory()

  return useCallback(() => history.push(props), [history])
}
