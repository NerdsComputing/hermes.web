import React from 'react'
import { Button } from '@material-ui/core'
import SaveIcon from '@material-ui/icons/Save'

export const SaveButton = () => <Button variant={'contained'} color={'primary'}>
  Save
  {' '}
  <SaveIcon style={{ paddingLeft: '5px' }} />
</Button>
