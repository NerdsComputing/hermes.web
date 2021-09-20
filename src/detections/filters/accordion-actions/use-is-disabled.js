import { useContext } from 'detections/context'
import { isEmpty } from 'lodash'

export const useIsDisabled = () => {
  const { errors } = useContext()

  return !isEmpty(errors)
}
