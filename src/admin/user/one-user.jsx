import React from 'react'
import PropTypes from 'prop-types'

import { Body } from 'admin/body/body'

export const OneUser = ({ user }) => <Body user={user} />

OneUser.propTypes = { user: PropTypes.object.isRequired }
