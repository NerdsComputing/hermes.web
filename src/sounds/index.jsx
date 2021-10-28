import React from 'react'

import { Intro } from 'sounds/intro'
import { useOnOpen } from 'sounds/use-on-open'
import { Livestream } from 'sounds/livestream'

const Sounds = () => {
  useOnOpen()

  return <>
    <Intro />
    <Livestream />
  </>
}

export default Sounds
