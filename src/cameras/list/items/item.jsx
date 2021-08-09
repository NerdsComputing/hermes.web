import React from 'react'
import PropTypes from 'prop-types'

import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

export const Item = ({ item }) => <ListItem>
  <ListItemIcon>
    <Checkbox color={'primary'}
              inputProps={{ 'aria-label': 'secondary checkbox' }} />
  </ListItemIcon>
  <ListItemText primary={item} />
</ListItem>

Item.propTypes = { item: PropTypes.string.isRequired }
