import styled from 'styled-components'

// Ícone de Play
export const PlayIcon = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid rgb(255, 101, 0);
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
`

// Ícone de Pause
export const PauseIcon = styled.div`
  display: flex;
  justify-content: space-between;
  width: 14px;
  height: 14px;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    width: 4px;
    height: 14px;
    background-color: rgb(255, 101, 0);
  }
`

// Botão para alternar entre Play e Pause
export const IconButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
  top: 80%;
  left: 75%;
  transform: translate(-50%, -50%);
  border-radius: 50px;
`