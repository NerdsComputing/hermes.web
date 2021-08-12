import React from 'react'
import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

export const FilterDetections = () => <Button fullWidth
                                              variant={'contained'} color={'secondary'}
                                              disabled>
  <SearchIcon />
</Button>
