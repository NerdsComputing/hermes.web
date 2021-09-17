import { useSettings } from 'settings/hooks/use-settings'

export const useLivestreamPadding = () => {
  const appear = useSettings().features.livestream

  return appear ? { style: { paddingBottom: '2%' } } : { style: { paddingBottom: '3.8%' } }
}
