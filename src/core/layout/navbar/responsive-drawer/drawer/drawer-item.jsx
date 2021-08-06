import React from 'react'
import PropTypes from 'prop-types'
import { ListItem } from '@material-ui/core'

import { Login } from 'login'
import { CustomLink } from 'core/layout/navbar/responsive-drawer/drawer/custom-link'

const useContent = item => item.link ? <CustomLink item={item} /> : <Login />

export const DrawerItem = ({ item }) => <ListItem>
  {useContent(item)}
</ListItem>

DrawerItem.propTypes = { item: PropTypes.object.isRequired }

