import { useOnClick } from 'core/layout/navbar/responsive-drawer/mobile/hooks/use-on-click'

export const useProps = () => ({
  ariaLabel: 'open drawer',
  edge: 'start',
  onClick: useOnClick(),
})
