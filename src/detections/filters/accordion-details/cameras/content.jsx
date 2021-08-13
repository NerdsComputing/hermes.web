import React from 'react'

import { InputWrapper } from 'detections/filters/accordion-details/input-wrapper'
import { usePickCamerasTemplate } from 'detections/filters/accordion-details/hooks/use-pick-cameras-template'

export const Content = () => {
  const CamerasTemplate = usePickCamerasTemplate()

  return <InputWrapper>
    <CamerasTemplate />
  </InputWrapper>
}
