import { from, reduce } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

import { modes } from 'detections/chart/modes'

const countDetections = (value, mode) => {
  const array = [[], [], [], []]

  value.map(entry => modes[mode](array, entry))

  return array.map(entry => entry.length)
}

const addToClass = (acc, current) => {
  acc[current.class].push(current)

  return acc
}

const addClass = (acc, current) => {
  acc[current.class] = [current]

  return acc
}

const accumulator = mode => (acc, [key, value]) => {
  acc[key] = countDetections(value, mode)

  return acc
}

export const byMode = ({ setState, mode, detections }) => from(detections)
  .pipe(reduce((acc, current) => acc[current.class] ? addToClass(acc, current) : addClass(acc, current), {}))
  .pipe(mergeMap(data => Object.entries(data)))
  .pipe(reduce(accumulator(mode), {}))
  .subscribe(acc => setState(acc))
