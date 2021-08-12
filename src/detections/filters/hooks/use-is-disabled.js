import { useContext } from 'detections/filters/context'

export const useIsDisabled = () => {
  const { filters, selectItems } = useContext()
  const count = filters.filter(elem => elem.type === '').length

  return count >= selectItems.length
}
