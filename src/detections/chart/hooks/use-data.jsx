import { labels } from 'detections/chart/format-data/labels.json'
import { useItems } from 'detections/chart/hooks/use-items'
import { formatData } from 'detections/chart/format-data'

export const useData = mode => {
  const items = useItems()

  return {
    labels: labels[mode],
    datasets: formatData(items, mode),
  }
}
