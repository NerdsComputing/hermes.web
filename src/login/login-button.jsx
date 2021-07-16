import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'

import { useStyle } from 'login/style/hooks/use-style'
import { UserIcon } from 'login/user-icon'
import { useButtonAction } from 'login/use-action-button'
import { useTextAction } from 'login/use-action-text'

export const LoginButton = ({ user }) => <Button classes={useStyle()} onClick={useButtonAction()} size={'large'}
                                                 variant={'contained'} startIcon={<UserIcon user={user} />}>
  {useTextAction(user)}
</Button>

LoginButton.propTypes = { user: PropTypes.object }
LoginButton.defaultProps = { user: undefined }

