import { useStyles } from 'detection/card/items/style'
import { useOnClick } from 'detection/card/items/camera/hooks/use-on-click'

export const useLink = () => ({
  variant: 'h6',
  align: 'center',
  className: useStyles().linkProps,
  onClick: useOnClick(),
})
