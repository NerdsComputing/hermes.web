import React from 'react'

import { ids } from 'user/id'
import { Row } from 'user/row'

export const Component = () => ids.map(ids => <Row id={ids.id} key={ids.id} />)
