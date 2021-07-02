import React from 'react'
import PropTypes from 'prop-types'

import { useStyle } from 'home/slider/style'
import { useContext } from 'home/context'

const getStyle = (index, currentIndex) => ({ ...index !== currentIndex && { display: 'none' } })

export const Slide = ({ image, description, index }) => {
  const { index: currentIndex } = useContext()

  return <div style={getStyle(index, currentIndex)}>
    <img src={image} className={useStyle().card} alt={'Recycle picture'} />
    <p className={useStyle().description}>{description}</p>
  </div>
}

Slide.propTypes = {
  image: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}
