import React from 'react'
import { MenuItem as MuiMenuItem } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useHandleSelect } from 'detections/filters/hooks/use-handle-select'

export const MenuItem = ({ item, index }) => <MuiMenuItem onClick={useHandleSelect(item, index)}>
  {item}
</MuiMenuItem>

MenuItem.propTypes = {
  item: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}
