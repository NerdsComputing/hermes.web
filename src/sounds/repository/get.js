import axios from 'axios'
import { from } from 'rxjs'
import { map } from 'rxjs/operators'

export const get = () => from(axios.get(`http://localhost:5000/prediction`))
  .pipe(map(({ data }) => data))

