import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

import { useProps } from 'cameras/list/hooks/use-props'

export const Item = ({ item }) => <ListItem>
  <ListItemIcon>
    <Checkbox {...useProps()} />
  </ListItemIcon>
  <ListItemText primary={item.id} />
</ListItem>

Item.propTypes = { item: PropTypes.string.isRequired }
