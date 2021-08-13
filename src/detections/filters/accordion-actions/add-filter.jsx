import React from 'react'
import { Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { useAddFilterProps } from 'detections/filters/accordion-actions/use-add-filter-props'

export const AddFilter = () => <Button {...useAddFilterProps()}>
  <AddIcon />
</Button>
