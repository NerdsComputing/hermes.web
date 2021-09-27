import React from 'react'

import { InputWrapper } from 'detections/filters/accordion-details/input-wrapper'
import { Input } from 'detections/filters/accordion-details/score/input'
import { Error } from 'detections/filters/accordion-details/error'
import { useCheckError } from 'detections/filters/accordion-details/error/use-check-error'
import { useContext } from 'detections/context'

export const Content = () => {
  const { errors } = useContext()

  return <InputWrapper>
    <Input label={'From'} name={'greaterEqualThan'} />
    <Input label={'To'} name={'lesserEqualThan'} />
    {useCheckError(errors.score) && <Error errorMessage={'First score must be lower or equal than second!'} />}
  </InputWrapper>
}
