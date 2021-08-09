import React, { useContext as useReactContext, useState } from 'react'

import * as mock from 'cameras/list/data.json'

export const Context = React.createContext({})

export const useContext = () => useReactContext(Context)

export const useDefaultContext = () => {
  const [rows, setRows] = useState(mock.data.cameras.items.map(item => item.id))
  const [searchPhrase, setSearchPhrase] = useState('')

  return { rows, setRows, searchPhrase, setSearchPhrase }
}
