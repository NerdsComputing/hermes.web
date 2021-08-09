import { data } from 'detections/data.json'
import { from, reduce } from 'rxjs'
import { mergeMap } from 'rxjs/operators'

const countDetections = value => {
  const array = [[], [], [], []]

  value.map(entry => array[Math.floor(new Date(entry.timestamp).getDate() / 8)].push(entry))

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

export const byDays = setState => from(data.detections.items)
  .pipe(reduce((acc, current) => acc[current.class] ? addToClass(acc, current) : addClass(acc, current), {}))
  .pipe(mergeMap(data => Object.entries(data)))
  .pipe(reduce(accumulator, {}))
  .subscribe(acc => setState(acc))
