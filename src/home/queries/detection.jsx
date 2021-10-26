import React from 'react'

import { CenterQuery } from 'home/queries/wrappers/center-query'
import { useStyle } from 'home/queries/wrappers/hooks/use-styles'

/* eslint-disable */
export const Detection = () => <CenterQuery>
    <pre className={useStyle().root}>
    {`         detection
         {
            class: "object_class",
            score: trust_value,
            cameraId: fingerprint - camera unique id,',
            timestamp: new Date().toISOString(),',
         }
   `}  
    </pre>
</CenterQuery>
/* eslint-enable */
