import React from 'react'

import { Wrapper } from 'detections/wrapper'
import { Filters } from 'detections/filters'
import { Chart } from 'detections/chart'
import { Behaviour } from 'detections/behaviour'
import { Table } from 'detections/table'
import { useDefaultContext, Context } from 'detections/context'

export const Detections = () => <Wrapper>
  <Context.Provider value={useDefaultContext()}>
    <Behaviour />
    <Filters />
    <Chart />
    <Table />
  </Context.Provider>
</Wrapper>
