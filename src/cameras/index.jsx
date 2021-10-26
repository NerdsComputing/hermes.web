import React from 'react'

import { Content } from 'cameras/content'
import { useDefaultContext, Context } from 'cameras/context'
import { Behaviour } from 'cameras/behaviour'

export const Cameras = () => <Context.Provider value={useDefaultContext()}>
  <Behaviour />
  <Content />
</Context.Provider>

