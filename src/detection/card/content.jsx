import React from 'react'

import { Score } from 'detection/card/items/score'
import { Timestamp } from 'detection/card/items/timestamp'
import { Class } from 'detection/card/items/class'
import { CardContent } from 'detection/card/card-content'

export const Content = () => <CardContent>
  <Score />
  <Class />
  <Timestamp />
</CardContent>
