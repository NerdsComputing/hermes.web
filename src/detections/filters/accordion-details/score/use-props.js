import { useStyles } from 'detections/filters/accordion-details/filter-style'

const InputProps = {
  inputProps: {
    min: 0,
    max: 0,
  },
}

export const useProps = label => ({
  type: 'number',
  variant: 'outlined',
  label,
  InputProps,
  classes: useStyles(),
})
