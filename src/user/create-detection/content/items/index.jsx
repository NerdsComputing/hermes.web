import React from 'react'

import { Wrapper } from 'user/create-detection/content/items/wrapper'
import { TaskName } from 'user/create-detection/content/items/taks-name'
import { Description } from 'user/create-detection/content/items/description'
import { Attachments } from 'user/create-detection/content/items/attachments'

export const Items = () => <Wrapper>
  <TaskName />
  <Description />
  <Attachments />
</Wrapper>
