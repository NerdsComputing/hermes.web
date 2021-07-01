import React from 'react'
import { Slide } from '@material-ui/core'

import { useContext } from 'home/carousel/hooks/use-context'
import { slides } from 'home/carousel/components'
import { CarouselSlide } from 'home/carousel/carousel-slider'

export const AnotherInsideContent = () => {
  const { slideIn, slideDirection } = useContext()

  return <Slide in={slideIn} direction={slideDirection}>
    <div>
      {slides.map((slide, index) => <CarouselSlide {...slide} index={index} key={index} />)}
    </div>
  </Slide>
}
