import React from 'react'

import { CenterQuery } from 'home/queries/wrappers/center-query'
import { useStyle } from 'home/queries/wrappers/hooks/use-styles'

/* eslint-disable */
export const Camera = () => <CenterQuery>
    <pre className={useStyle().root}>
      {`       camera
       {
          id,
          fingerprint,
          longitude,
          latitude
       }
      `}
      </pre>
</CenterQuery>
/* eslint-enable */
