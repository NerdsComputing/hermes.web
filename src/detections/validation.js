import * as Yup from 'yup'

const checkValues = value => value.greaterEqualThan <= value.lesserEqualThan

export const validation = Yup.object({
  class: Yup.string()
    .max(10, 'Class should have less than 10 characters'),
  score: Yup.object({
    greaterEqualThan: Yup.number()
      .min(0, 'Value must be higher or equal than 0')
      .max(100, ' Value must be lower or equal than 100'),
    lesserEqualThan: Yup.number()
      .min(0, 'Value must be higher or equal than 0')
      .max(100, 'Value must be lower or equal than 100'),
  })
    .test('score-test', `score-error`, score => checkValues(score)),
  timestamp: Yup.object({
    greaterEqualThan: Yup.date()
      .max(Date(), 'Date cannot be in future')
      .min('January 1, 2021 00:00:00', 'Date cannot be older than January 1 2021'),
    lesserEqualThan: Yup.date()
      .max(Date(), 'Date cannot be in future')
      .min('January 1, 2021 00:00:00', 'Date cannot be older than January 1 2021'),
  })
    .test('timestamp-test', 'timestamp-error', timestamp => checkValues(timestamp)),
})
