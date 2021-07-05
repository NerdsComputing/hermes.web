import { useContext } from 'home/context'
import { useActions } from 'home/arrows/hooks/use-actions'
import { calculateParameters } from 'home/arrows/caculate-parameters'

export const useOnArrowClick = () => {
  const { index } = useContext()
  const { onTimeout, resetState } = useActions()

  return direction => {
    resetState(direction)
    setTimeout(() => onTimeout(calculateParameters(direction, index)), 500)
  }
}
