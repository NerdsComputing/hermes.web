import React from 'react'
import PropTypes from 'prop-types'

import { useStyle } from 'home/carousel/styles/style-carousel'
import { useContext } from 'home/carousel/hooks/use-context'

const getStyle = (index, currentIndex) => ({ ...index !== currentIndex && { display: 'none' } })

export const CarouselSlide = ({ image, description, index }) => {
  const { index: currentIndex } = useContext()

  return <div style={getStyle(index, currentIndex)}>
    <img src={image} className={useStyle().card} alt={'Recycle picture'} />
    <p className={useStyle().description}>{description}</p>
  </div>
}

CarouselSlide.propTypes = {
  image: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}
