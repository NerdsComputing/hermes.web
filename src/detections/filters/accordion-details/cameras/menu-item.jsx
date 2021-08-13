import React, { useState } from 'react'
import { MenuItem as MuiMenuItem, Checkbox } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useHandleCheck } from 'detections/filters/accordion-details/cameras/use-handle-check'

export const MenuItem = ({ item }) => {
  const [checked, setChecked] = useState(false)

  return <MuiMenuItem onClick={useHandleCheck(checked, setChecked)}>
    <Checkbox checked={checked} />
    {item}
  </MuiMenuItem>
}

MenuItem.propTypes = { item: PropTypes.string.isRequired }
