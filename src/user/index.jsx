import React from 'react'

import { Context, useDefaultContext } from 'user/context'
import { CreateDetection } from 'user/create-detection'

export const UserPage = () => <Context.Provider value={useDefaultContext()}>
  <CreateDetection />
</Context.Provider>
