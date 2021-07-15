import React from 'react'
import { Button } from '@material-ui/core'

import { Actions } from 'detection/card/action/actions'

export const Buttons = () => <Actions>
  <Button variant={'contained'} color={'primary'}>Set status</Button>
  <Button variant={'contained'} color={'primary'} style={{ backgroundColor: '#d98726' }}>Edit</Button>
  <Button variant={'contained'} color={'primary'} style={{ backgroundColor: '#bf020e' }}>Delete</Button>
</Actions>
