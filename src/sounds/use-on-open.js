import { useDispatch } from 'react-redux'

import { actions } from 'sounds/slices/get'

export const useOnOpen = () => {
  const dispatch = useDispatch()
  const { attempt } = actions

  setInterval(() => dispatch(attempt()), 5000)

  return ''
}
