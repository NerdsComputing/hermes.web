import React from 'react'

import { Wrapper } from 'detections/wrapper'
import { Filters } from 'detections/filters'
import { Chart } from 'detections/chart'
import { Behaviour } from 'detections/behaviour'
import { Table } from 'detections/table'
import { Detection } from 'detections/detection'

export const Detections = () => <Wrapper>
  <Behaviour />
  <Filters />
  <Chart />
  <Table />
  <Detection />
</Wrapper>
