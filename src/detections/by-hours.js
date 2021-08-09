import { from, reduce } from 'rxjs'
import { mergeMap, tap } from 'rxjs/operators'

import { data } from 'detections/data.json'

const countDetections = value => {
  const array = [[], [], [], []]
  value.map(entry => array[Math.floor(new Date(entry.timestamp).getHours() / 6)].push(entry))

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

const accumulator = (acc, [key, value]) => {
  acc[key] = countDetections(value)

  return acc
}

export const byHours = setState => from(data.detections.items)
  .pipe(reduce((acc, current) => acc[current.class] ? addToClass(acc, current) : addClass(acc, current), {}))
  .pipe(tap(acc => console.log(acc)))
  .pipe(mergeMap(data => Object.entries(data)))
  .pipe(reduce(accumulator, {}))
  .pipe(tap(acc => console.log(acc)))
  .subscribe(acc => setState(acc))
