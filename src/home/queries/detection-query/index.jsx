import React from 'react'

import { Name } from 'home/queries/detection-query/name'
import { OpenBrace } from 'home/queries/detection-query/open-brace'
import { CloseBrace } from 'home/queries/detection-query/close-brace'
import { Properties } from 'home/queries/detection-query/properties'
import { MarginWrapper } from 'home/queries/wrappers/margin-wrapper'

export const Detection = () => <MarginWrapper>
  <Name />
  <OpenBrace />
  <Properties />
  <CloseBrace />
</MarginWrapper>
