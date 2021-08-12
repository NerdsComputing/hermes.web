import { useIsDisabled } from 'detections/filters/hooks/use-is-disabled'
import { useAddFilterComponent } from 'detections/filters/hooks/use-add-filter-component'

export const useAddFilterProps = () => ({
  fullWidth: true,
  variant: 'contained',
  color: 'primary',
  disabled: useIsDisabled(),
  onClick: useAddFilterComponent(),
})
