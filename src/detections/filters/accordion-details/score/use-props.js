import { useContext } from 'detections/context'
import { useAddScore } from 'detections/filters/accordion-details/score/use-add-score'
import { useSetInput } from 'detections/filters/accordion-details/score/use-set-input'
import { useCheckErrors } from 'detections/filters/accordion-details/score/use-check-errors'

export const useProps = (label, name) => ({
  ...useSetInput(label, name),
  ...useCheckErrors(name),
  value: useContext().values.score[name],
  onChange: useAddScore(name),
})
