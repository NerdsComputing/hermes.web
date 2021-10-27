import React from 'react'
import { Modal } from '@material-ui/core'

import { useModalProps } from 'detections/filters/hooks/use-modal-props'
import { Accordion } from 'detections/filters/accordion'
import { useModalStyle } from 'detections/filters/hooks/use-modal-style'

export const ModalFilter = () => <Modal {...useModalProps()} className={useModalStyle().root}>
  <Accordion />
</Modal>
