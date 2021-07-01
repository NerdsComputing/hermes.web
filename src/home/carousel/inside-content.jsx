import React from 'react'

import { Arrow } from 'home/carousel/arrow'
import { useOnArrowClick } from 'home/carousel/hooks/use-on-arrow-click'
import { AnotherInsideContent } from 'home/carousel/another-inside-content'

export const InsideContent = () => {
  const onArrowClick = useOnArrowClick()

  return <>
    <Arrow direction={'left'} clickFunction={() => onArrowClick('left')} />
    <AnotherInsideContent />
    <Arrow direction={'right'} clickFunction={() => onArrowClick('right')} />
  </>
}
