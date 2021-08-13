import React from 'react'
import { Button } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

import { useFilterDetectionsProps } from 'detections/filters/accordion-actions/use-filter-detections-props'

export const FilterDetections = () => <Button {...useFilterDetectionsProps()}>
  <SearchIcon />
</Button>
