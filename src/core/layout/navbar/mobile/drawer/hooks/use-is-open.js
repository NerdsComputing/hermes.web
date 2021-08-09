import { useContext } from 'core/layout/navbar/context'

export const useIsOpen = () => {
  const { mobileOpen } = useContext()

  return mobileOpen
}
