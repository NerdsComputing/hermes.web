import React from 'react'
import PersonIcon from '@material-ui/icons/Person'
import * as PropTypes from 'prop-types'

import { ProfileImage } from 'login/profile-image'

export const UserIcon = ({ user }) => user ? <ProfileImage user={user} /> : <PersonIcon />

UserIcon.propTypes = { user: PropTypes.object }
UserIcon.defaultProps = { user: undefined }
