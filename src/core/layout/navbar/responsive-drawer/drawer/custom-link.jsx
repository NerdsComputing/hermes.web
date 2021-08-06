import React from 'react'
import PropTypes from 'prop-types'
import { Link, ListItemText } from '@material-ui/core'

export const CustomLink = ({ item }) => <Link href={item.link}>
  <ListItemText primary={item.label} />
</Link>

CustomLink.propTypes = { item: PropTypes.object.isRequired }
