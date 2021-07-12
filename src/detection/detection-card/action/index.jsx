import React from 'react'
import { Button } from '@material-ui/core'

import { CardAction } from 'detection/detection-card/action/card-action'

export const CardButtons = () => <CardAction>
  <Button variant={'contained'} color={'primary'}>Set status</Button>
  <Button variant={'contained'} color={'primary'}>Edit</Button>
  <Button variant={'contained'} color={'primary'}>Delete</Button>
</CardAction>
