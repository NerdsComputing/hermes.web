import { useClassName } from 'home/character-section/hooks/use-class-name'

export const useImgProps = position => ({
  src: 'https://via.placeholder.com/467x548',
  alt: 'characterImage',
  ...useClassName(position),
})
