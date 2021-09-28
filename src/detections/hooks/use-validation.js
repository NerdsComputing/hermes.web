import { useLocation } from 'react-router-dom'

export const useValidation = () => {
  const link = useLocation()

  return link.search ? link.search.split('?')[1].split('=')[0] : null
}
