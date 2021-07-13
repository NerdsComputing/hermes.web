import React from 'react'

import { Header } from 'user/header'
import { Row } from 'user/row'
import { useStyle } from 'user/style'
import { ids } from 'user/id'

export const User = () => <div className={useStyle().main}>
  <Header />
  {ids.map((ids, index) => <Row key={index} />)}
</div>
