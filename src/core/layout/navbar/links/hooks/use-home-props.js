import { useStyles } from 'core/layout/navbar/links/hooks/use-styles'

export const useHomeProps = () => ({
  variant: 'h6',
  classes: useStyles('/'),
  underline: 'none',
})
