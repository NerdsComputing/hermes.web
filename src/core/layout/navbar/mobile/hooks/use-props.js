import { useOnClick } from 'core/layout/navbar/mobile/hooks/use-on-click'

export const useProps = () => ({
  ariaLabel: 'open drawer',
  edge: 'start',
  onClick: useOnClick(),
})
