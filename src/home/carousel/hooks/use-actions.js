import { useSetTimeout } from 'home/carousel/hooks/use-set-timeout'
import { useResetState } from 'home/carousel/hooks/use-reset-state'

export const useActions = () => {
  const onTimeout = useSetTimeout()
  const resetState = useResetState()

  return { onTimeout, resetState }
}
