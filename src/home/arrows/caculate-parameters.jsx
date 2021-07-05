import { slides } from 'home/slides'

export const calculateParameters = (direction, index) => {
  const numSlides = slides.length
  const increment = direction === 'left' ? -1 : 1
  const newIndex = (index + increment + numSlides) % numSlides
  const oppDirection = direction === 'left' ? 'right' : 'left'

  return { newIndex, oppDirection }
}
