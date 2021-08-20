import React from 'react'

import { InputWrapper } from 'detections/filters/accordion-details/input-wrapper'
import { Date } from 'detections/filters/accordion-details/timestamp/date'
import { Error } from 'detections/filters/accordion-details/error'
import { useContext } from 'detections/context'
import { useCheckError } from 'detections/filters/accordion-details/error/use-check-error'

export const Input = () => {
  const { errors } = useContext()

  return <InputWrapper>
    <Date label={'From'} name={'greaterEqualThan'} />
    <Date label={'To'} name={'lesserEqualThan'} />
    {useCheckError(errors.timestamp) && <Error errorMessage={'First date must be lower or equal than second!'} />}
  </InputWrapper>
}
