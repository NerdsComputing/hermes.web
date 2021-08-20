import { useContext } from 'detections/context'
import { useStyles } from 'detections/filters/accordion-details/timestamp/style'

export const useSetInput = (label, name) => ({
  inputVariant: 'outlined',
  label,
  name: `timestamp.${name}`,
  value: useContext().values.timestamp[name],
  ampm: false,
  classes: useStyles(),
})
