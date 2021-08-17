import { useStyles } from 'detection/style'

export const useMessageProps = () => ({
  container: true,
  justify: 'center',
  direction: 'column',
  alignItems: 'center',
  classes: useStyles(),
})
