import { useContext } from 'cameras/context'
import { useExpandedMobileStyles } from 'cameras/map/sidebar/styles/expanded-mobile-styles'
import { useCollapseMobileStyles } from 'cameras/map/sidebar/styles/collapse-mobile-styles'

export const useMobileStyles = () => {
  const { isExpanded } = useContext()
  const expandedMobileStyle = useExpandedMobileStyles()
  const collapseMobileStyle = useCollapseMobileStyles()

  return isExpanded ? expandedMobileStyle : collapseMobileStyle
}
