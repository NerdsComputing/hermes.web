import React from 'react'
import { Button } from '@material-ui/core'

import { CardAction } from 'detection/card/action/container'

export const CardButtons = () => <CardAction>
  <Button variant={'contained'} color={'primary'}>Set status</Button>
  <Button variant={'contained'} color={'primary'}>Edit</Button>
  <Button variant={'contained'} color={'primary'}>Delete</Button>
</CardAction>
