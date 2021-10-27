import { useContext } from 'detections/filters/context'
import {useOnClose} from '../accordion-actions/use-on-close'

export const useModalProps = () => {
  const { open } = useContext()
  const close = useOnClose()

  return {
    open,
    onClose: () => close()
  }
}
