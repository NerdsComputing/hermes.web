import React from 'react'
import { MenuItem as MuiMenuItem, Checkbox } from '@material-ui/core'
import PropTypes from 'prop-types'

export const MenuItem = ({ item }) => <MuiMenuItem>
  <Checkbox />
  {item}
</MuiMenuItem>

MenuItem.propTypes = { item: PropTypes.string.isRequired }
