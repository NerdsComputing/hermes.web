import React from 'react'
import * as Material from '@material-ui/core'
import PropTypes from 'prop-types'

import { useNavigation } from 'core/layout/navbar/links/hooks/use-navigation'
import { useLinkProps } from 'core/layout/navbar/links/hooks/use-link-props'
import { useLineProps } from 'core/layout/navbar/links/hooks/use-line-porps'

export const LinkItem = ({ item }) => <Material.Grid item>
  <Material.Box px={2} classes={useLineProps(`${item.link}`)}>
    <Material.Link onClick={useNavigation(`${item.link}`)} {...useLinkProps(`${item.link}`)}>
      {item.label}
    </Material.Link>
  </Material.Box>
</Material.Grid>

LinkItem.propTypes = { item: PropTypes.object.isRequired }
