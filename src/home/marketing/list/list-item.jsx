import React from 'react'
import { ListItem as MuiListItem, ListItemText } from '@material-ui/core'
import PropTypes from 'prop-types'

import { ListLink } from 'home/marketing/list/list-link'
import { useStyle } from 'home/marketing/list/item-style'

export const ListItem = ({ text, link }) => <MuiListItem classes={useStyle()}>
  <ListItemText primary={text} />
  <ListLink link={link} />
</MuiListItem>

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

