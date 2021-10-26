import React from 'react'

import { Id } from 'home/queries/camera-query/id'
import { Fingerprint } from 'home/queries/camera-query/fingerprint'
import { Longitude } from 'home/queries/camera-query/longitude'
import { Latitude } from 'home/queries/camera-query/latitude'

export const Properties = () => <>
  <Id />
  <Fingerprint />
  <Longitude />
  <Latitude />
</>
