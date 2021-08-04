import React from 'react'
import PropTypes from 'prop-types'
import { Avatar } from '@material-ui/core'

import { useStyle } from 'login/profile-image/use-style'

export const ProfileImage = ({ user }) => {
  const styles = useStyle()

  return user && <Avatar className={styles.small} src={user?.profileObj?.imageUrl} />
}

ProfileImage.propTypes = { user: PropTypes.object }
ProfileImage.defaultProps = { user: undefined }
