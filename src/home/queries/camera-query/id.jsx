import React from 'react'

import { camera } from 'home/queries/camera-query/camera'
import { Wrapper } from 'home/queries/wrapper'

export const Id = () => <Wrapper>
  { camera.id }
</Wrapper>
