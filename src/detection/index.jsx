import React from 'react'

import { usePickContent } from 'detection/hooks/use-pick-content'
import { Behaviour } from 'detection/behaviour'
import { Wrapper } from 'detection/wrapper'

export const DetectionPage = () => {
  const Content = usePickContent()

  return <Wrapper>
    <Behaviour />
    <Content />
  </Wrapper>
}
