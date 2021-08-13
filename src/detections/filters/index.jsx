import React from 'react'

import { Context, useDefaultContext } from 'detections/filters/context'
import { Accordion } from 'detections/filters/accordion'

export const Filters = () => <Context.Provider value={useDefaultContext()}>
  <Accordion />
</Context.Provider>
