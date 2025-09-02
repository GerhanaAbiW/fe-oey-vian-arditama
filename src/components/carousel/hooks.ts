import { useCallback, useState } from 'react'

export const useCarousel = (images: string[]) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    )
  }, [images.length])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    )
  }, [images.length])

  return {
    currentIndex,
    prevSlide,
    nextSlide,
    setCurrentIndex,
  }
}
