import React from 'react'

import { Slider } from 'home/slider'
import { useStyle } from 'home/carousel/style'
import { Arrow } from 'home/arrows/arrow'

export const Carousel = () => <div className={useStyle().carousel}>
  <Arrow direction={'left'} />
  <Slider />
  <Arrow direction={'right'} />
</div>
