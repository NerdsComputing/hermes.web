import React from 'react'
import { ListItem as MuiListItem, ListItemText, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useBeginningStyle } from 'home/marketing/list/beginning-style'

export const ListItem = ({ text, beginning }) => <MuiListItem style={{ padding: '0' }}>
  <Typography variant={'subtitle2'} classes={useBeginningStyle()}>{beginning}</Typography>
  <ListItemText secondary={text} />
</MuiListItem>

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  beginning: PropTypes.string.isRequired,
}

