import React from 'react'

import { CreationAt } from 'detection/detection-card/content/creation-at'
import { Description } from 'detection/detection-card/content/description'
import { Attachements } from 'detection/detection-card/content/attachements'
import { Container } from 'detection/detection-card/content/container'

export const Content = () => <Container>
  <CreationAt />
  <Description />
  <Attachements />
</Container>
