import { useCallback } from 'react'

export const useHandleCheck = (checked, setChecked) => useCallback(() => {
  setChecked(!checked)
}, [checked, setChecked])
