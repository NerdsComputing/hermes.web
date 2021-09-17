import { useStyles } from 'cameras/style'
import { useSettings } from 'settings/hooks/use-settings'

export const useLivestreamProps = () => ({
  classes: useStyles(),
  hidden: !useSettings().features.livestream,
})
