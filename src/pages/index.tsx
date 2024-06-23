import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import styles from '../components/Slider.module.css'

import Img01 from '../assets/images/inicio.jpg'
import Img02 from '../assets/images/cooler.jpg'
import Img03 from '../assets/images/processador01.jpg'
import Img04 from '../assets/images/processador02.jpg'
import Img05 from '../assets/images/fim.jpg'

import {
  Container,
  Header,
  Section,
  Main,
  Footer,
  NavMenu,
  Logo,
  SearchInput,
  AuthLinks
} from '../styles/layout'

const images = [Img01, Img02, Img03, Img04, Img02, Img02, Img05]
const totalSlides = images.length

const Layout: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const animationDuration = 7000 // Tempo da animação de 3 segundos

  const startSlider = () => {
    intervalRef.current = setInterval(() => {
      nextSlide()
    }, animationDuration)
  }

  const stopSlider = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  const pauseSlider = () => {
    stopSlider()
    setIsPaused(true)
  }

  const resumeSlider = () => {
    setIsPaused(false)
    startSlider()
  }

  const resetSlider = () => {
    stopSlider()
    startSlider()
  }

  useEffect(() => {
    startSlider()
    return () => {
      stopSlider()
    }
  }, [])

  const prevSlide = () => {
    if (isTransitioning) return // Ignorar se já estiver em transição
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => prevIndex - 1)
    resetSlider() // Reiniciar o intervalo de animação
  }

  const nextSlide = () => {
    if (isTransitioning) return // Ignorar se já estiver em transição
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => prevIndex + 1)
    resetSlider() // Reiniciar o intervalo de animação
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
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [currentIndex, isTransitioning])
  // const [currentIndex, setCurrentIndex] = useState(0)
  // const [isTransitioning, setIsTransitioning] = useState(false)
  // const intervalRef = useRef<NodeJS.Timeout | null>(null)
  // const animationDuration = 8000 // Tempo da animação de 8 segundos

  // const startSlider = () => {
  //   intervalRef.current = setInterval(() => {
  //     nextSlide()
  //   }, animationDuration)
  // }

  // const stopSlider = () => {
  //   if (intervalRef.current) {
  //     clearInterval(intervalRef.current)
  //   }
  // }

  // const resetSlider = () => {
  //   stopSlider()
  //   startSlider()
  // }

  // useEffect(() => {
  //   startSlider()
  //   return () => { stopSlider() }
  // }, [])

  // const nextSlide = () => {
  //   if (isTransitioning) return
  //   setIsTransitioning(true)
  //   setCurrentIndex((prevIndex) => prevIndex + 1)
  //   resetSlider() // Reiniciar o intervalo de animação
  // }

  // const prevSlide = () => {
  //   if (isTransitioning) return
  //   setIsTransitioning(true)
  //   setCurrentIndex((prevIndex) => prevIndex - 1)
  //   resetSlider() // Reiniciar o intervalo de animação
  // }

  // useEffect(() => {
  //   if (currentIndex === totalSlides) {
  //     setTimeout(() => {
  //       setIsTransitioning(false)
  //       setCurrentIndex(0)
  //     }, 500) // Tempo de transição igual ao CSS transition duration
  //   } else if (currentIndex === -1) {
  //     setTimeout(() => {
  //       setIsTransitioning(false)
  //       setCurrentIndex(totalSlides - 1)
  //     }, 500) // Tempo de transição igual ao CSS transition duration
  //   } else {
  //     setIsTransitioning(false)
  //   }
  // }, [currentIndex])

  return (
    <Container>
      <div
        style={{
          width: '1568px'
        }}
      >
        <Header>
          <NavMenu>Menu</NavMenu>
          <Logo>Logo Aqui</Logo>
          <SearchInput type='text' placeholder='Busque aqui' />
          <AuthLinks>
            <div className='login'>
              faça <strong>LOGIN</strong> ou
            </div>
            <div>Cadastro</div>
          </AuthLinks>
        </Header>
        <Section>
          <div className={styles.slider}>
            <button className={styles.leftArrow} onClick={prevSlide}>
              &#10094;
            </button>
            <div
              className={styles.sliderContent}
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
              }}
            >
              {[images[totalSlides - 1], ...images, images[0]].map((image, index) => (
                <div key={index} className={styles.slide}>
                  <Image src={image} alt={`Slide ${index}`} width={800} height={400} />
                </div>
              ))}
            </div>
            <button className={styles.rightArrow} onClick={nextSlide}>
              &#10095;
            </button>
          </div>
          <div className={styles.controls}>
            <button onClick={isPaused ? resumeSlider : pauseSlider}>
              {isPaused ? 'Resume' : 'Pause'}
            </button>
          </div>
          {/* <div className={styles.slider}>
            <button className={styles.leftArrow} onClick={prevSlide}>
              &#10094;
            </button>
            <div className={styles.sliderContent} style={{
              transform: `translateX(-${(currentIndex + 1) * 100}%)`,
              transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
            }}>
              {[images[totalSlides - 1], ...images, images[0]].map((image, index) => (
                <div key={index} className={`${styles.slide} ${index === currentIndex + 1 ? styles.active : ''}`}>
                  <Image src={image} alt={`Slide ${index}`} width={200} height={200} />
                </div>
              ))}
            </div>
            <button className={styles.rightArrow} onClick={nextSlide}>
              &#10095;
            </button>
          </div> */}
        </Section>
        <Main></Main>
        <Footer></Footer>
      </div>
    </Container>
  )
}

export default Layout
