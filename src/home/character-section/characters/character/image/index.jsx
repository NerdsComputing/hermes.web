import React from 'react'
import { Box } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useStyles } from 'home/character-section/characters/character/image/style'

export const Image = ({ position }) => <Box classes={useStyles(position)()} />

Image.propTypes = { position: PropTypes.string.isRequired }
