import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { Slider, ArrowButton, SliderContent, Slide } from '../../styles/styled-components/carousel'

import PlayPauseIcon from '../playPauseIcon'

import Img01 from '../../assets/images/109e6b4e64bf53f52e8ce98049d9059a.png'
import Img02 from '../../assets/images/1718214171oferta-do-dia.png'
import Img03 from '../../assets/images/1718990950liquida-tech.jpg'
import Img04 from '../../assets/images/1718996497.png'
import Img05 from '../../assets/images/1718996737.png'
import Img06 from '../../assets/images/1718997452.png'
import Img07 from '../../assets/images/1719231337.png'
import Img08 from '../../assets/images/1719231759.webp'
import Img09 from '../../assets/images/1719235033.webp'

const images = [Img01, Img02, Img03, Img04, Img05, Img06, Img07, Img08, Img09]
const totalSlides = images.length

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const animationDuration = 7000 // Tempo da animação de 3 segundos

  const startSlider = (): void => {
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, animationDuration)
  }

  const stopSlider = (): void => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current)
    }
  }

  const pauseSlider = (): void => {
    stopSlider()
    setIsPaused(true)
  }

  const resumeSlider = (): void => {
    setIsPaused(false)
    startSlider()
  }

  const resetSlider = (): void => {
    stopSlider()
    startSlider()
  }

  useEffect((): (() => void) => {
    startSlider()
    return () => {
      stopSlider()
    }
  }, [])

  const prevSlide = (): void => {
    if (isTransitioning) return // Ignorar se já estiver em transição ou se estiver pausado
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => prevIndex - 1)
    if (!isPaused) {
      resetSlider() // Reiniciar o intervalo de animação
    }
  }

  const nextSlide = (): void => {
    if (isTransitioning) return // Ignorar se já estiver em transição
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => prevIndex + 1)
    if (!isPaused) {
      resetSlider() // Reiniciar o intervalo de animação
    }
  }

  useEffect(() => {
    if (isTransitioning) {
      const timeout = setTimeout(() => {
        if (currentIndex === totalSlides + 1) {
          setIsTransitioning(false)
          setCurrentIndex(1)
        } else if (currentIndex === 0) {
          setIsTransitioning(false)
          setCurrentIndex(totalSlides)
        } else {
          setIsTransitioning(false)
        }
      }, 420) // Tempo de transição igual ao CSS transition duration
      return (): void => {
        clearTimeout(timeout)
      }
    }
  }, [currentIndex, isTransitioning])

  return (
    <>
      <Slider>
        <ArrowButton left onClick={prevSlide}>
          &#10094;
        </ArrowButton>
        <SliderContent currentIndex={currentIndex} isTransitioning={isTransitioning}>
          {[images[totalSlides - 1], ...images, images[0]].map((image, index) => (
            <Slide key={index}>
              <Image src={image} alt={`Slide ${index}`} width={800} height={400} />
            </Slide>
          ))}
        </SliderContent>
        <ArrowButton right onClick={nextSlide}>
          &#10095;
        </ArrowButton>
        <PlayPauseIcon isPaused={isPaused} resumeSlider={resumeSlider} pauseSlider={pauseSlider} />
      </Slider>
    </>
  )
}

export default Carousel
