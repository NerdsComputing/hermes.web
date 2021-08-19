import React, { useContext as useReactContext, useState } from 'react'

export const Context = React.createContext({})

export const useContext = () => useReactContext(Context)

export const useDefaultContext = () => {
  const [searchPhrase, setSearchPhrase] = useState(null)
  const [searchInput, setSearchInput] = useState('')

  return { searchPhrase, setSearchPhrase, searchInput, setSearchInput }
}
