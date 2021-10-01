import { useNavigation } from 'detections/table/hooks/use-navigation'
import { useItem } from 'detection/card/use-item'

export const useOnClick = () => ({ onClick: useNavigation(`/cameras?id=${useItem().camera.id}`) })
