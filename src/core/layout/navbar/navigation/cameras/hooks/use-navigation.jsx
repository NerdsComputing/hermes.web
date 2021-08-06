import { useCallback } from 'react'
import { useHistory } from 'react-router-dom'

export const useNavigation = () => {
  const history = useHistory()

  return useCallback(() => {
    history.push('/cameras')
  }, [history])
}
