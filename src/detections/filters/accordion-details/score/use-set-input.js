import { useStyles } from 'detections/filters/accordion-details/filter-style'

export const useSetInput = (label, name) => ({
  type: 'number',
  variant: 'outlined',
  name: `score.${name}`,
  classes: useStyles(),
})
