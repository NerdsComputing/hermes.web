import { useContext } from 'home/carousel/hooks/use-context'

export const useResetState = () => {
  const { setSlideIn, setSlideDirection } = useContext()

  return direction => {
    setSlideDirection(direction)
    setSlideIn(false)
  }
}
