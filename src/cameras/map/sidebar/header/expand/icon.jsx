import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import { useContext } from 'cameras/context'

export const Icon = () => {
  const { isExpanded } = useContext()

  return isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />
}
