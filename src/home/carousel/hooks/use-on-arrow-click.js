import { useContext } from 'home/carousel/hooks/use-context'
import { useActions } from 'home/carousel/hooks/use-actions'
import { calculateParameters } from 'home/carousel/caculate-parameters'

export const useOnArrowClick = () => {
  const { index } = useContext()
  const { onTimeout, resetState } = useActions()

  return direction => {
    resetState(direction)
    setTimeout(() => onTimeout(calculateParameters(direction, index)), 500)
  }
}
