import { useStyles } from 'cameras/style'
import { useSettings } from 'settings/hooks/use-settings'

export const useLivestreamProps = () => ({
  justify: 'center',
  classes: useStyles(),
  hidden: !useSettings().features.livestream,
})
