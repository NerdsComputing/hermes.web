import React from 'react'

import { CardWrapper } from 'detection/card/card-wrapper'
import { Title } from 'detection/card/title'
import { Content } from 'detection/card/content'
import { Buttons } from 'detection/card/action'

export const Card = () => <CardWrapper>
  <Title />
  <Content />
  <Buttons />
</CardWrapper>
