import { useContext } from 'home/context'

export const useSetTimeout = () => {
  const { setIndex, setSlideDirection, setSlideIn } = useContext()

  return ({ newIndex, oppDirection }) => {
    setIndex(newIndex)
    setSlideDirection(oppDirection)
    setSlideIn(true)
  }
}
