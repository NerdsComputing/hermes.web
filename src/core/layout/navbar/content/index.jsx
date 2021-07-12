import React from 'react'

import { Gravatar } from 'core/layout/navbar/content/gravatar'
import { Email } from 'core/layout/navbar/content/email'
import { Container } from 'core/layout/navbar/content/container'

export const UserContent = () => <Container>
  <Email />
  <Gravatar />
</Container>
