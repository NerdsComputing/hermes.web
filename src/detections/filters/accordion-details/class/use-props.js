import { useContext } from 'detections/context'

import { useSetInput } from 'detections/filters/accordion-details/class/use-set-input'
import { useCheckErrors } from 'detections/filters/accordion-details/class/use-check-errors'

export const useProps = () => ({
  ...useSetInput(),
  ...useCheckErrors(),
  onChange: useContext().handleChange,
})
