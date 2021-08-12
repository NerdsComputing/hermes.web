import React from 'react'
import { Select as MuiSelect } from '@material-ui/core'
import { useSelector } from 'react-redux'

import { MenuItem } from 'detections/filters/accordion-details/cameras/menu-item'

export const Select = () => {
  const { items } = useSelector(({ cameras }) => cameras.get.data)

  return <MuiSelect>
    {items.map(item => <MenuItem key={item.id} item={item.id} />)}
  </MuiSelect>
}
