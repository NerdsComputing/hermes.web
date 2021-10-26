import React from 'react'

import { detection } from 'home/queries/detection-query/detection'
import { Wrapper } from 'home/queries/wrapper'

export const Timestamp = () => <Wrapper>
  { detection.timestamp }
</Wrapper>

