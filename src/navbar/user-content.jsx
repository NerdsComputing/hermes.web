import React from 'react'

import { Gravatar } from 'navbar/gravatar'
import { Email } from 'navbar/email'
import { UserContentWrapper } from 'navbar/user-content-wrapper'

export const UserContent = () => <UserContentWrapper>
  <Email />
  <Gravatar />
</UserContentWrapper>
