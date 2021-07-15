import React from 'react'

import { CreatedAt } from 'detection/card/content/items/created-at'
import { Description } from 'detection/card/content/items/description'
import { Attachments } from 'detection/card/content/items/attachments'
import { CardContent } from 'detection/card/content/card-content'

export const Content = () => <CardContent>
  <CreatedAt />
  <Description />
  <Attachments />
</CardContent>
