import React from 'react'

import { detection } from 'home/queries/detection-query/detection'
import { Wrapper } from 'home/queries/wrappers/wrapper'

export const Score = () => <Wrapper>
  { detection.score }
</Wrapper>
