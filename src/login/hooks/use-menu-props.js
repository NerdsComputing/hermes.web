import { useSettings } from 'settings/hooks/use-settings'

export const useMenuProps = () => ({
  px: 3,
  hidden: !useSettings().features.login,
})
