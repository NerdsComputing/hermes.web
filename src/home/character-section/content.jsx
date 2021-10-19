import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

import { useCharacterTitleStyle } from 'home/character-section/hooks/use-character-title-style'
import { useDescriptionStyle } from 'home/character-section/hooks/use-descripiton-style'

export const Content = ({ item }) => <>
  <Typography color={'primary'} classes={useCharacterTitleStyle()}>
    {item.title}
  </Typography>
  <Typography color={'primary'} classes={useDescriptionStyle()}>
    {item.content}
  </Typography>
</>

Content.propTypes = { item: PropTypes.object.isRequired }
