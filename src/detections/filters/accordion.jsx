import React from 'react'
import { Accordion as MuiAccordion } from '@material-ui/core'

import { Wrapper } from 'detections/filters/wrapper'
import { useStyles } from 'detections/filters/accordion-style'
import { AccordionDetails } from 'detections/filters/accordion-details'
import { AccordionSummary } from 'detections/filters/accordion-summary'
import { AccordionActions } from 'detections/filters/accordion-actions'

export const Accordion = () => <Wrapper>
  <MuiAccordion classes={useStyles()}>
    <AccordionSummary />
    <AccordionDetails />
    <AccordionActions />
  </MuiAccordion>
</Wrapper>
