import React from 'react'
import { Dialog } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useContext } from 'user/context'

export const Wrapper = ({ children }) => {
  const { openDialog, setOpenDialog } = useContext()

  return <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
    {children}
  </Dialog>
}

Wrapper.propTypes = { children: PropTypes.element.isRequired }
