import { useStyles } from 'detections/filters/accordion-details/filter-style'
import { useContext } from 'detections/context'

export const useSetInput = () => ({
  variant: 'outlined',
  classes: useStyles(),
  name: 'class',
  value: useContext().values.class,
})
