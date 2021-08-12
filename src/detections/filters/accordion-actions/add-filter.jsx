import React from 'react'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { useIsDisabled } from 'detections/filters/hooks/use-is-disabled'
import { useAddFilterComponent } from 'detections/filters/hooks/use-add-filter-component'

export const AddFilter = () => <Button fullWidth variant={'contained'} color={'primary'}
                                       disabled={useIsDisabled()}
                                       onClick={useAddFilterComponent()}>
  <AddIcon />
</Button>
