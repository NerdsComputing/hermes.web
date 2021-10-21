import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Content } from 'home/character-section/characters/character/text/content'
import { useTextboxProps } from 'home/character-section/characters/character/text/hooks/use-textbox-props'

export const Text = ({ item }) => <Box classes={useTextboxProps(item.place)}>
  <Content item={item} />
</Box>

Text.propTypes = { item: PropTypes.object.isRequired }
