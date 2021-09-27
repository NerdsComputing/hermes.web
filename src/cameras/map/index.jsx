import React from 'react'

import { usePickContent } from 'cameras/map/hooks/use-pick-content'

export const Map = () => {
  const Content = usePickContent()

  return <Content />
}
