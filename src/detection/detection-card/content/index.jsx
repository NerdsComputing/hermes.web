import React from 'react'

import { CreationAt } from 'detection/detection-card/content/items/creation-at'
import { Description } from 'detection/detection-card/content/items/description'
import { Attachements } from 'detection/detection-card/content/items/attachements'
import { Container } from 'detection/detection-card/content/container'

export const Content = () => <Container>
  <CreationAt />
  <Description />
  <Attachements />
</Container>
