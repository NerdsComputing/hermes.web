import { useStyles } from 'core/layout/navbar/links/hooks/use-styles'

export const useDetectionsProps = () => ({
  variant: 'h6',
  classes: useStyles('/detections'),
  underline: 'none',
})
