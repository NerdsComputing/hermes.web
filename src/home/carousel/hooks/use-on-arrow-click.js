import { useContext } from 'home/carousel/hooks/use-context'
import { slides } from 'home/carousel/components'
import { useActions } from 'home/carousel/hooks/use-actions'

const calculateParameters = (direction, index) => {
  const numSlides = slides.length
  const increment = direction === 'left' ? -1 : 1
  const newIndex = (index + increment + numSlides) % numSlides
  const oppDirection = direction === 'left' ? 'right' : 'left'

  return { newIndex, oppDirection }
}

export const useOnArrowClick = () => {
  const { index } = useContext()
  const { onTimeout, resetState } = useActions()

  return direction => {
    resetState(direction)
    setTimeout(() => onTimeout(calculateParameters(direction, index)), 500)
  }
}
