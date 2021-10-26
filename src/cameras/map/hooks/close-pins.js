import { forEach } from 'lodash'

export const closePins = () => items => forEach(items, item => {
  item.show = false

  return item
})
