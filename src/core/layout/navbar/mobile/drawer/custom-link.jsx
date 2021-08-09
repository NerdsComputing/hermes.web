import React from 'react'
import PropTypes from 'prop-types'
import { Link, ListItemText } from '@material-ui/core'

import { useNavigation } from 'core/layout/navbar/mobile/drawer/hooks/use-navigation'

export const CustomLink = ({ item }) => <Link onClick={useNavigation(item)}>
  <ListItemText primary={item.label} />
</Link>

CustomLink.propTypes = { item: PropTypes.object.isRequired }
