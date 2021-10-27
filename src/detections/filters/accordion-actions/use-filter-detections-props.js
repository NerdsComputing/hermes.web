import { useContext } from 'detections/context'
import { useIsDisabled } from 'detections/filters/accordion-actions/use-is-disabled'

export const useFilterDetectionsProps = () => ({
  variant: 'contained',
  color: 'secondary',
  type: 'submit',
  disabled: useIsDisabled(),
  onClick: useContext().handleSubmit,
})
