import React from 'react'
import { Box, Grid } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useWrapperStyle } from 'home/character-section/hooks/use-wrapper-style'
import { Content } from 'home/character-section/content'
import { useImgProps } from 'home/character-section/hooks/use-img-porps'
import { useTextboxProps } from 'home/character-section/hooks/use-textbox-props'

export const Character = ({ item }) => <Grid item classes={useWrapperStyle()}>
  <img {...useImgProps(item.place)} />
  <Box {...useTextboxProps(item.place)}>
    <Content item={item} />
  </Box>
</Grid>

Character.propTypes = { item: PropTypes.object.isRequired }
