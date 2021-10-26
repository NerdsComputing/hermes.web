import React from 'react'

import { Detection } from 'home/queries/detection-query'
import { Camera } from 'home/queries/camera-query'
import { CenterQuery } from 'home/queries/wrappers/center-query'

export const Queries = () => <>
  <CenterQuery>
    <Detection />
  </CenterQuery>
  <CenterQuery>
    <Camera />
  </CenterQuery>
</>
