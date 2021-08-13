import React from 'react'
import { Select as MuiSelect } from '@material-ui/core'
import PropTypes from 'prop-types'

import { MenuItem } from 'detections/filters/accordion-details/filter/menu-item'
import { useContext } from 'detections/filters/context'

export const Select = ({ index }) => {
  const { filterVariants } = useContext()

  return <MuiSelect labelId={'input-label'}>
    {filterVariants.map(item => <MenuItem key={item} index={index} item={item} />)}
  </MuiSelect>
}

Select.propTypes = { index: PropTypes.number.isRequired }
