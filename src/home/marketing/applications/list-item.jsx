import React from 'react'
import { ListItem as MuiListItem, ListItemText } from '@material-ui/core'
import PropTypes from 'prop-types'

export const ListItem = ({ text }) => <MuiListItem style={{ padding: '0' }}>
  <ListItemText primary={text} />
</MuiListItem>

ListItem.propTypes = { text: PropTypes.string.isRequired }

