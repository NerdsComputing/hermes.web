import React from 'react'

import { CreatedAt } from 'detection/card/content/items/created-at'
import { Description } from 'detection/card/content/items/description'
import { Attachments } from 'detection/card/content/items/attachments'
import { Wrapper } from 'detection/card/content/wrapper'

export const Content = () => <Wrapper>
  <CreatedAt />
  <Description />
  <Attachments />
</Wrapper>
