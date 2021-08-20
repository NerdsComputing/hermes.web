import { useAddTimestamp } from 'detections/filters/accordion-details/timestamp/use-add-timestamp'
import { useSetInput } from 'detections/filters/accordion-details/timestamp/use-set-input'
import { useCheckErrors } from 'detections/filters/accordion-details/timestamp/use-check-errors'

export const useProps = (label, name) => ({
  ...useSetInput(label, name),
  ...useCheckErrors(name),
  onChange: useAddTimestamp(name),
})
