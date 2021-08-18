import React from 'react'

import { CardContent } from 'detection/card/card-content'
import { Score } from 'detection/card/items/score'
import { Class } from 'detection/card/items/class'
import { Timestamp } from 'detection/card/items/timestamp'

export const Content = () => <CardContent>
  <Score />
  <Class />
  <Timestamp />
</CardContent>
