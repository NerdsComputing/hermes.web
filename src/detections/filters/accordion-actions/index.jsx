import React from 'react'
import { AccordionActions as MuiAccordionActions } from '@material-ui/core'

import { AddFilter } from 'detections/filters/accordion-actions/add-filter'
import { FilterDetections } from 'detections/filters/accordion-actions/filter-detections'

export const AccordionActions = () => <MuiAccordionActions>
  <AddFilter />
  <FilterDetections />
</MuiAccordionActions>
