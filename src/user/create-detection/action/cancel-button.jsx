import React from 'react'
import { Button } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

import { useContext } from 'user/context'

export const CancelButton = () => {
  const { setOpenDialog } = useContext()

  return <Button variant={'contained'} color={'primary'} onClick={() => setOpenDialog(false)}>
    Cancel
    {' '}
    <CloseIcon />
  </Button>
}
