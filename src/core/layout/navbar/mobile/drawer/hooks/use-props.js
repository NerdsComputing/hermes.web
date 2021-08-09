import { useIsOpen } from 'core/layout/navbar/mobile/drawer/hooks/use-is-open'
import { useOnClose } from 'core/layout/navbar/mobile/drawer/hooks/use-on-close'

export const useProps = () => ({
  variant: 'temporary',
  anchor: 'right',
  open: useIsOpen(),
  onClose: useOnClose(),
  ModalProps: { keepMounted: true },
})
