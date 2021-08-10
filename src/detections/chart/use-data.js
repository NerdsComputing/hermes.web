import { useSelector } from 'react-redux'
import { get } from 'lodash'

import { labels } from 'detections/chart/labels.json'
import { byMode } from 'detections/chart/by-mode'
import { buildDatasets } from 'detections/chart/build-datasets'

export const useData = mode => {
  const items = useSelector(({ detections }) => get(detections, 'get.data.items', []))

  return {
    labels: labels[mode],
    datasets: byMode(items, mode).map(buildDatasets),
  }
}
