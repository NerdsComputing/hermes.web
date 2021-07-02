import { useContext } from 'home/context'

export const useResetState = () => {
  const { setSlideIn, setSlideDirection } = useContext()

  return direction => {
    setSlideDirection(direction)
    setSlideIn(false)
  }
}
