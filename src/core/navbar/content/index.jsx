import React from 'react'

import { Gravatar } from 'core/navbar/content/gravatar'
import { Email } from 'core/navbar/content/email'
import { Container } from 'core/navbar/content/container'

export const UserContent = () => <Container>
  <Email />
  <Gravatar />
</Container>
