import React from 'react'

import { Wrapper } from 'detection/card/wrapper'
import { Title } from 'detection/card/title'
import { Content } from 'detection/card/content'
import { useItem } from 'detection/card/use-item'

export const Card = () => {
  const data = useItem()

  return <Wrapper>
    <Title id={data.id} />
    <Content item={data} />
  </Wrapper>
}

