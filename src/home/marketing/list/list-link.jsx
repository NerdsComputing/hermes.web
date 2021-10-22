import React from 'react'
import { Link } from '@material-ui/core'
import PropTypes from 'prop-types'

import { useLinkStyle } from 'home/marketing/list/link-style'
import LinkIcon from 'home/heading-section/link/link_black_24dp.svg'

export const ListLink = ({ link }) => {
  console.log(link)

  return <Link href={link}>
    <img src={LinkIcon} alt={'link'} className={useLinkStyle().root} />
  </Link>
}

ListLink.propTypes = { link: PropTypes.string.isRequired }
