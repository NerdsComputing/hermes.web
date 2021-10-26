import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'

import { useProps } from 'cameras/map/sidebar/content/list/hooks/use-props'
import { useTextStyles } from 'cameras/map/sidebar/content/list/items/text-styles'
import { useItemStyles } from 'cameras/map/sidebar/content/list/items/item-styles'

export const Item = ({ item }) => <ListItem classes={useItemStyles()}>
  <ListItemIcon>
    <Checkbox {...useProps()} />
  </ListItemIcon>
  <ListItemText primary={item.id} classes={useTextStyles()} />
</ListItem>

Item.propTypes = { item: PropTypes.object.isRequired }
