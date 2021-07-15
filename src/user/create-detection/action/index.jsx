import React from 'react'

import { Wrapper } from 'user/create-detection/action/wrapper'
import { SaveButton } from 'user/create-detection/action/save-button'
import { CancelButton } from 'user/create-detection/action/cancel-button'

export const Action = () => <Wrapper>
  <SaveButton />
  <CancelButton />
</Wrapper>
