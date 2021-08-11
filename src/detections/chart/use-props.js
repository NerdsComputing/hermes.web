import { useDisplayCase } from 'detections/hooks/use-display-case'

export const useProps = ({ mode, setMode }) => {
  const displayCase = useDisplayCase().true

  return ({
    value: mode,
    onChange: event => setMode(event.target.value),
    ...displayCase === 'success' ? {} : { style: { display: 'none' } },
  })
}
