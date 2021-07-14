import React from 'react'
import PropTypes from 'prop-types'

import { Navbar } from 'core/layout/navbar'
import { Footer } from 'core/layout/footer'

export const Layout = ({ children }) => <>
  <Navbar />
  {children}
  <Footer />
</>

Layout.propTypes = { children: PropTypes.element.isRequired }
