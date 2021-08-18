import React from 'react'

import { usePickContent } from 'cameras/list/hooks/use-pick-content'

export const ItemIds = () => {
  const Content = usePickContent()

  return <Content />
}
