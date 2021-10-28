import React from 'react'
import { Modal as MuiModal } from '@material-ui/core'

import { useContext } from 'detections/context'
import { Modal } from 'detections/detection/modal'

export const Detection = () => {
  const { detectionModal, setDetectionModal } = useContext()

  return <MuiModal open={detectionModal.isOpen} onClose={() => setDetectionModal({ ...detectionModal, isOpen: false })}
                   style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Modal detection={detectionModal} />
  </MuiModal>
}
