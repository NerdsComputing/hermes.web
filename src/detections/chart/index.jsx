import React, { useState } from 'react'

import { Mode } from 'detections/chart/mode'
import { usePickContent } from 'detections/chart/hooks/use-pick-content'

export const Chart = () => {
  const Content = usePickContent()
  const [mode, setMode] = useState('hours')

  return <>
    <Mode mode={mode} setMode={setMode} />
    <Content mode={mode} />
  </>
}
