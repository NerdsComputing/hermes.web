import React from 'react'

import { Context, useDefaultContext } from 'detections/filters/context'
import { ModalFilter } from 'detections/filters/modal'
import { ModalButton } from 'detections/filters/modal-button'

export const OpenButton = () => <Context.Provider value={useDefaultContext()}>
  <ModalButton />
  <ModalFilter />
</Context.Provider>
