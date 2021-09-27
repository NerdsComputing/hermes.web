import React from 'react'
import { MenuItem as MuiMenuItem, Checkbox } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useProps } from 'detections/filters/accordion-details/cameras/use-props'
import { useIsChecked } from 'detections/filters/accordion-details/cameras/use-is-checked'

export const MenuItem = ({ item, index }) => <MuiMenuItem {...useProps(index, item)}>
  <Checkbox checked={useIsChecked(item)} />
  {item}
</MuiMenuItem>

MenuItem.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}
