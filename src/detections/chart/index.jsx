import React from 'react'

import { useInit } from 'detections/chart/use-init'
import { BarChart } from 'detections/chart/bar'
import { useItems } from 'detections/chart/use-items'
import { CircularIndeterminate } from 'detections/chart/loading'

export const Chart = () => {
  useInit()
  const items = useItems()

  return items.length > 0 ? <BarChart /> : <CircularIndeterminate />
}

