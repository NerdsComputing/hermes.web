import React from 'react'
import PropTypes from 'prop-types'

import { Navbar } from 'core/layout/navbar'
import { Footer } from 'core/layout/footer'
import { Children } from 'core/layout/children'

export const Layout = ({ children }) => <>
  <Navbar />
  <Children>
    {children}
  </Children>
  <Footer />
</>

Layout.propTypes = { children: PropTypes.element.isRequired }
