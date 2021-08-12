import React from 'react'

import { Wrapper } from 'detections/wrapper'
import { Filters } from 'detections/filters'
import { Table } from 'detections/table'
import { Chart } from 'detections/chart'
import { Behaviour } from 'detections/behaviour'

export const Detections = () => <Wrapper>
  <Behaviour />
  <Filters />
  <Chart />
  <Table />
</Wrapper>

