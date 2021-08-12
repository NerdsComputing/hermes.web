import React from 'react'
import { useSelector } from 'react-redux'

import { Loading } from 'detections/filters/accordion-details/cameras/loading'
import { InputWrapper } from 'detections/filters/accordion-details/input-wrapper'
import { Input } from 'detections/filters/accordion-details/cameras/input'

export const Content = () => {
  const { data } = useSelector(({ cameras }) => cameras.get)

  return <InputWrapper>
    {
      data ? <Input /> : <Loading />
    }
  </InputWrapper>
}
