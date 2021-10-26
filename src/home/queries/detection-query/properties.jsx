import React from 'react'

import { Class } from 'home/queries/detection-query/class'
import { Score } from 'home/queries/detection-query/score'
import { CameraId } from 'home/queries/detection-query/camera-id'
import { Timestamp } from 'home/queries/detection-query/timestamp'

export const Properties = () => <>
  <Class />
  <Score />
  <CameraId />
  <Timestamp />
</>
