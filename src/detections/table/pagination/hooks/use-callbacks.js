import { useChangeRowsPerPage } from 'detections/table/pagination/hooks/use-change-rows-per-page'
import { useChangePage } from 'detections/table/pagination/hooks/use-change-page'

export const useCallbacks = () => {
  const onChangeRowsPerPage = useChangeRowsPerPage()
  const onChangePage = useChangePage()

  return ({
    onChangeRowsPerPage,
    onChangePage,
  })
}
