import React from 'react'

import { Context, useDefaultContext } from 'home/context'
import { Content } from 'home/content'

export const HomePage = () => <Context.Provider value={useDefaultContext()}>
  <Content />
</Context.Provider>
