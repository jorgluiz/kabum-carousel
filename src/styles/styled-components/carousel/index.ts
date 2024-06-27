import styled, { css, type FlattenSimpleInterpolation } from 'styled-components'

export const Slider = styled.div`

position: relative;
max-width: 100%;
margin: auto;
overflow: hidden;
`

interface ArrowButtonProps {
  left?: boolean
  right?: boolean
}

export const ArrowButton = styled.button<ArrowButtonProps>`

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 1rem;
  cursor: pointer;
  z-index: 10;

  ${({ left }): false | FlattenSimpleInterpolation =>
    left !== undefined &&
    css`
      left: 10px;
    `};

    ${({ right }): false | FlattenSimpleInterpolation =>
    right !== undefined &&
    css`
      right: 10px;
    `}
`

interface SliderContentProps {
  currentIndex: number
  isTransitioning: boolean
}

export const SliderContent = styled.div<SliderContentProps>`

display: flex;
transform: ${({ currentIndex }): string => `translateX(-${currentIndex * 100}%)`};
transition:  ${({ isTransitioning }): string => isTransitioning ? 'transform 0.5s ease-in-out' : 'none'};
`

export const Slide = styled.div`
min-width: 100%;

& img {
width: 100%;
display: block;
}
`

export const Controls = styled.div`

`


