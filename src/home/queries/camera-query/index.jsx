import React from 'react'

import { Name } from 'home/queries/camera-query/name'
import { OpenBrace } from 'home/queries/camera-query/open-brace'
import { Properties } from 'home/queries/camera-query/properties'
import { CloseBrace } from 'home/queries/camera-query/close-brace'
import { MarginWrapper } from 'home/queries/wrappers/margin-wrapper'

export const Camera = () => <MarginWrapper>
  <Name />
  <OpenBrace />
  <Properties />
  <CloseBrace />
</MarginWrapper>
