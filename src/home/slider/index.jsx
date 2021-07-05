import React from 'react'
import { Slide as MaterialSlide } from '@material-ui/core'

import { useContext } from 'home/context'
import { slides } from 'home/slides'
import { Slide } from 'home/slider/slide'

export const Slider = () => {
  const { slideIn, slideDirection } = useContext()

  return <MaterialSlide in={slideIn} direction={slideDirection}>
    <div>
      {slides.map((slide, index) => <Slide {...slide} index={index} key={index} />)}
    </div>
  </MaterialSlide>
}
