import React from 'react'

import { CreatedAt } from 'detection/detection-card/content/items/created-at'
import { Description } from 'detection/detection-card/content/items/description'
import { Attachments } from 'detection/detection-card/content/items/attachments'
import { Container } from 'detection/detection-card/content/container'

export const Content = () => <Container>
  <CreatedAt />
  <Description />
  <Attachments />
</Container>
