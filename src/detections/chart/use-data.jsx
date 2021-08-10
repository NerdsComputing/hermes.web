import { labels } from 'detections/chart/labels.json'
import { byMode } from 'detections/chart/by-mode'
import { buildDatasets } from 'detections/chart/build-datasets'
import { useItems } from 'detections/chart/use-items'

export const useData = mode => {
  const items = useItems()

  return {
    labels: labels[mode],
    datasets: byMode(items, mode).map(buildDatasets),
  }
}
