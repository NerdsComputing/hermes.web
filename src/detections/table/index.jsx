import React from 'react'

import { usePickContent } from 'detections/table/hooks/use-pick-content'

export const Table = () => {
  const Content = usePickContent()

  return <Content />
}
