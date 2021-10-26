import { useContext } from 'cameras/context'
import { useExpandedMobileStyles } from 'cameras/map/sidebar/content/styles/expanded-mobile-styles'
import { useCollapseMobileStyles } from 'cameras/map/sidebar/content/styles/collapse-mobile-styles'

export const useMobileStyles = () => {
  const { isExpanded } = useContext()

  const expandedStyle = useExpandedMobileStyles()
  const collapseStyle = useCollapseMobileStyles()

  return isExpanded ? expandedStyle : collapseStyle
}
