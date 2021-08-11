import React from 'react'

import { useDisplayCase } from 'detections/hooks/use-display-case'
import { useContent } from 'detections/hooks/use-content'

export const Chart = () => {
  const displayCase = useDisplayCase().true || 'loading'
  const Content = useContent()[displayCase]

  return <Content />
}
