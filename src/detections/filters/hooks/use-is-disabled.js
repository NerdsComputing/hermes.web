import { useContext } from 'detections/filters/context'

export const useIsDisabled = () => {
  const { filters, filterVariants } = useContext()

  const count = filters.filter(elem => elem.type === '').length

  return count >= filterVariants.length
}
