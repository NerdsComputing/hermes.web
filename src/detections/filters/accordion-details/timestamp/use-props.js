import { useStyles } from 'detections/filters/accordion-details/timestamp/style'

export const useProps = label => ({
  value: '2017-05-24T10:30',
  inputVariant: 'outlined',
  onChange: val => console.log(val),
  label,
  ampm: false,
  classes: useStyles(),
})
