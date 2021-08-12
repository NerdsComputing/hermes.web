import React from 'react'

import { Wrapper } from 'detections/wrapper'
import { Filters } from 'detections/filters'
import { Bar } from 'detections/bar'
import { Table } from 'detections/table'

export const Detections = () => <>
  <Table />

export const Detections = () => <Wrapper>
    <Behaviour />
    <Filters/>
    <Chart />      
    <Bar/>
  </Wrapper>
}

