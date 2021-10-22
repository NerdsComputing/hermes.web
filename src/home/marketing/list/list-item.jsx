import React from 'react'
import { ListItem as MuiListItem, ListItemText, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { ListLink } from 'home/marketing/list/list-link'
import { useStyle } from 'home/marketing/list/item-style'
import { useBeginningStyle } from 'home/marketing/list/beginning-style'

export const ListItem = ({ text, link, beginning }) => <MuiListItem classes={useStyle()}>
  <Typography variant={'subtitle2'} classes={useBeginningStyle()}>{beginning}</Typography>
  <ListItemText secondary={text} />
  <ListLink link={link} />
</MuiListItem>

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  beginning: PropTypes.string.isRequired,
}

