import { useSetTimeout } from 'home/arrows/hooks/use-set-timeout'
import { useResetState } from 'home/arrows/hooks/use-reset-state'

export const useActions = () => {
  const onTimeout = useSetTimeout()
  const resetState = useResetState()

  return { onTimeout, resetState }
}
