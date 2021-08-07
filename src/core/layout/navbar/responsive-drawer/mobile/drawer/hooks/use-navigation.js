import { useHistory } from 'react-router-dom'
import { useCallback } from 'react'

export const useNavigation = item => {
  const history = useHistory()

  return useCallback(link => {
    history.push(item.link)
  }, [history, item])
}
