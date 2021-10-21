import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from 'home/character-section/characters/character/wrapper'
import { Image } from 'home/character-section/characters/character/image'
import { Text } from 'home/character-section/characters/character/text'

export const Character = ({ item }) => <Wrapper>
  <Image position={item.place} />
  <Text item={item} />
</Wrapper>

Character.propTypes = { item: PropTypes.object.isRequired }
