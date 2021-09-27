import { useCallback } from 'react'

import { useContext } from 'detections/context'

export const useAddScore = name => {
  const { setFieldValue } = useContext()

  return useCallback(event => {
    setFieldValue(`score.${name}`, parseInt(event.target.value))
  }, [name, setFieldValue])
}
