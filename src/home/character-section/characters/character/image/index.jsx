import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyle } from 'home/character-section/characters/character/image/use-style'

export const Image = ({ position }) => <Box classes={useStyle(position)} />

Image.propTypes = { position: PropTypes.string.isRequired }
