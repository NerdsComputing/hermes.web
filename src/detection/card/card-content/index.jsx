import React from 'react'
import { CardContent as MaterialCardContent } from '@material-ui/core'
import PropTypes from 'prop-types'

import { Container } from 'detection/card/card-content/container'
import { Wrapper } from 'detection/card/card-content/wrapper'
import { useStyles } from 'detection/card/card-content/style'

export const CardContent = ({ children }) => <MaterialCardContent classes={useStyles()}>
  <Container>
    <Wrapper>
      {children}
    </Wrapper>
  </Container>
</MaterialCardContent>

CardContent.propTypes = { children: PropTypes.array.isRequired }
