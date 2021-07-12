import React from 'react'

import { Card } from 'detection/detection-card/container'
import { Title } from 'detection/detection-card/title'
import { Content } from 'detection/detection-card/content'
import { CardButtons } from 'detection/detection-card/action'

export const DetectionCard = () => <Card>
  <Title />
  <Content />
  <CardButtons />
</Card>
