import React from 'react'
import { Grid } from '@material-ui/core'

import { useContext } from 'detections/filters/context'
import { Filter } from 'detections/filters/accordion-details/filter'
import { filtersTemplate } from 'detections/filters/accordion-details/filters-template'

export const Details = () => {
  const { filters } = useContext()

  return filters.map((item, index) => <Grid key={index}>
    {
      item.type === '' ? <Filter index={index} /> : filtersTemplate[item.type]({ index })
    }
  </Grid>)
}
