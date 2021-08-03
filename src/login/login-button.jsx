import React from 'react'
import PropTypes from 'prop-types'
import { Button as MaterialButton } from '@material-ui/core'

import { useStyle } from 'login/style/hooks/use-style'
import { UserIcon } from 'login/user-icon'
import { useButtonCallback } from 'login/use-button-callback'
import { useButtonValue } from 'login/use-button-value'

export const Button = ({ user }) => <MaterialButton classes={useStyle()} onClick={useButtonCallback()} size={'large'}
                                                    variant={'contained'} startIcon={<UserIcon user={user} />}>
  {useButtonValue(user)}
</MaterialButton>

Button.propTypes = { user: PropTypes.object }
Button.defaultProps = { user: undefined }

