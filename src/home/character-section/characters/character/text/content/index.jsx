import React from 'react'
import { Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useCharacterTitleStyle }
  from 'home/character-section/characters/character/text/content/hooks/use-character-title-style'
import { useDescriptionStyle }
  from 'home/character-section/characters/character/text/content/hooks/use-description-style'

export const Content = ({ item }) => <>
  <Typography color={'primary'} classes={useCharacterTitleStyle()}>
    {item.title}
  </Typography>
  <Typography color={'primary'} classes={useDescriptionStyle()}>
    {item.content}
  </Typography>
</>

Content.propTypes = { item: PropTypes.object.isRequired }
