import React from 'react'

import { Wrapper } from 'detection/card/wrapper'
import { Title } from 'detection/card/title'
import { Content } from 'detection/card/content'
import { useItems } from 'detection/card/use-items'

export const Card = () => {
  const data = useItems()

  return <Wrapper>
    <Title id={data.id} />
    <Content item={data} />
  </Wrapper>
}

