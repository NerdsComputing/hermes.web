import React from 'react'

import { CreatedAt } from 'detection/card/content/items/created-at'
import { Description } from 'detection/card/content/items/description'
import { Attachments } from 'detection/card/content/items/attachments'
import { Container } from 'detection/card/content/container'

export const Content = () => <Container>
  <CreatedAt />
  <Description />
  <Attachments />
</Container>
