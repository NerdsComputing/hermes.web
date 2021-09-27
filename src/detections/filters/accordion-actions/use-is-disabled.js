import { useContext } from 'detections/filters/context'

export const useIsDisabled = () => {
  const { filterVariants } = useContext()

  return filterVariants.length === 4
}
