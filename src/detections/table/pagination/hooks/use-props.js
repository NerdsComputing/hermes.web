import { useContext } from 'detections/context'
import { useTotalCounts } from 'detections/table/pagination/hooks/use-total-counts'
import { useCallbacks } from 'detections/table/pagination/hooks/use-callbacks'

export const useProps = () => ({
  component: 'div',
  count: useTotalCounts(),
  page: useContext().pageIndex,
  rowsPerPage: useContext().pageSize,
  ...useCallbacks(),
})
