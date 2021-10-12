import Owl from 'core/layout/navbar/logo/icons8-owl-100.png'
import { useNavigation } from 'core/layout/navbar/links/hooks/use-navigation'
import { useClassName } from 'core/layout/navbar/logo/hooks/use-class-name'

export const useImgProps = () => ({
  ...useClassName(),
  src: Owl,
  onClick: useNavigation('/'),
  alt: 'logo',
})
