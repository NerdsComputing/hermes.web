import { useStyles } from 'core/layout/navbar/links/hooks/use-styles'

export const useLinkProps = path => ({
  variant: 'p',
  classes: useStyles(path),
  underline: 'none',
})
