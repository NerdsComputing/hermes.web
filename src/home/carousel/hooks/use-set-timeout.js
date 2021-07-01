import { useContext } from 'home/carousel/hooks/use-context'

export const useSetTimeout = () => {
  const { setIndex, setSlideDirection, setSlideIn } = useContext()

  return ({ newIndex, oppDirection }) => {
    setIndex(newIndex)
    setSlideDirection(oppDirection)
    setSlideIn(true)
  }
}
