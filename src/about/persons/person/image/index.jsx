import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from 'about/persons/person/image/wrapper'
import { useImageStyles } from 'about/persons/person/image/styles/image-style'

export const Image = ({ picture }) => <Wrapper>
  <img src={picture} alt={'Team member'} className={useImageStyles().root} />
</Wrapper>

Image.propTypes = { picture: PropTypes.object.isRequired }
