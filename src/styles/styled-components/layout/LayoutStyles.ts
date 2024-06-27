import styled from 'styled-components'

export const StyledLayout = styled.div`
/* Ao invés de definir alturas fixas, use min-height ou height: auto 
com flexbox para permitir que o conteúdo determine a altura dos elementos. 
Isso ajuda a evitar problemas em diferentes resoluções e tamanhos de tela. */
display: flex;
justify-content: center;
min-height: 100vh;
/* width: 1568px; */
`