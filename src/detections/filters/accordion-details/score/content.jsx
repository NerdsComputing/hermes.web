import React from 'react'

import { InputWrapper } from 'detections/filters/accordion-details/input-wrapper'
import { Input } from 'detections/filters/accordion-details/score/input'

export const Content = () => <InputWrapper>
  <Input label={'From'} />
  <Input label={'To'} />
</InputWrapper>
