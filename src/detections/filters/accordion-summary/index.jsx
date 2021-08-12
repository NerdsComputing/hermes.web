import React from 'react'
import { AccordionSummary as MuiAccordionSummary, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

export const AccordionSummary = () => <MuiAccordionSummary expandIcon={<ExpandMoreIcon />}>
  <Typography variant={'h4'}>Filters</Typography>
</MuiAccordionSummary>
