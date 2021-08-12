import React, { useState } from 'react'

import { Mode } from 'detections/chart/mode'
import { useGetState } from 'detections/chart/hooks/use-get-state'

export const Chart = () => {
  const Content = useGetState()
  const [mode, setMode] = useState('hours')

  return <>
    <Mode mode={mode} setMode={setMode} />
    <Content mode={mode} />
  </>
}
