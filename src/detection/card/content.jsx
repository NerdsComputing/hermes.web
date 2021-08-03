import React from 'react'

import { CreatedAt } from 'detection/card/items/created-at'
import { Description } from 'detection/card/items/description'
import { Attachments } from 'detection/card/items/attachments'
import { CardContent } from 'detection/card/card-content'

export const Content = () => <CardContent>
  <CreatedAt />
  <Description />
  <Attachments />
</CardContent>
