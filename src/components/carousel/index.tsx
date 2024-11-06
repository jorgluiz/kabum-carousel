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

// Interfaces
interface CarouselState {
  currentIndex: number
  isTransitioning: boolean
}

const Carousel: React.FC = () => {
  // Estado para controlar o carregamento inicial
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true) // Marca o componente como carregado assim que ele é montado
  }, [])
  
  // Exibe nada (null) até que o componente esteja completamente carregado
  if (!isLoaded) return null
    
  // Eu mudei a função para setState com um callback para garantir que a atualização do estado seja baseada no estado anterior,
  // especialmente quando várias atualizações de estado são dependentes entre si. Isso evita possíveis problemas de atualização assíncrona.
  // No entanto, considerando que no seu código original os estados estavam separados, podemos manter essa abordagem para a função pauseSlider.
  // Aqui está o código atualizado mantendo suas funções de estado individuais:
  const [state, setState] = useState<CarouselState>({
    currentIndex: 1,
    isTransitioning: false
  })
  const [isPaused, setIsPaused] = useState<boolean>(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const animationDuration = 7000 // Tempo da animação de 7 segundosz

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
    setIsPaused(false)
    return () => {
      stopSlider()
    }
  }, [])

  const prevSlide = (): void => {
    if (state.isTransitioning) return // Ignorar se já estiver em transição ou se estiver pausado
    setState((prevState) => ({
      ...prevState,
      isTransitioning: true,
      currentIndex: prevState.currentIndex - 1
    }))
    if (!isPaused) {
      resetSlider() // Reiniciar o intervalo de animação
    }
  }

  const nextSlide = (): void => {
    if (state.isTransitioning) return // Ignorar se já estiver em transição
    setState((prevState) => ({
      ...prevState,
      isTransitioning: true,
      currentIndex: prevState.currentIndex + 1
    }))
    if (!isPaused) {
      resetSlider() // Reiniciar o intervalo de animação
    }
  }

  useEffect(() => {
    if (state.isTransitioning) {
      const timeout = setTimeout(() => {
        if (state.currentIndex === totalSlides + 1) {
          setState({ ...state, isTransitioning: false, currentIndex: 1 })
        } else if (state.currentIndex === 0) {
          setState({ ...state, isTransitioning: false, currentIndex: totalSlides })
        } else {
          setState((prevState) => ({ ...prevState, isTransitioning: false }))
        }
      }, 420) // Tempo de transição igual ao CSS transition duration
      return (): void => {
        clearTimeout(timeout)
      }
    }
  }, [state])

  return (
    <>
      <Slider>
        <ArrowButton left onClick={prevSlide}>
          &#10094;
        </ArrowButton>
        <SliderContent currentIndex={state.currentIndex} isTransitioning={state.isTransitioning}>
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
