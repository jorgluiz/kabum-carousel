import styled from 'styled-components'

export const Container = styled.div`
/* Ao invés de definir alturas fixas, use min-height ou height: auto 
com flexbox para permitir que o conteúdo determine a altura dos elementos. 
Isso ajuda a evitar problemas em diferentes resoluções e tamanhos de tela. */
display: flex;
justify-content: center;
min-height: 100vh;
/* width: 1568px; */
`

export const Header = styled.header`
display: flex;
justify-content: space-around;
align-items: center;
background-color: #0060b1;
height: 104px;
`
export const NavMenu = styled.nav`
  // Estilos para o menu de navegação
`
export const Logo = styled.div`
  // Estilos para o logo
`
export const SearchInput = styled.input`
min-width: 488px;
height: 36px;
background-color: #fff;
padding: 0 0 0 20px;
border-radius: 5px;
border: 0 solid #000;

@media (max-width: 768px) {
    min-width: 350px; // Ajuste conforme necessário para telas médias
  }

  @media (max-width: 480px) {
    min-width: 200px; // Ajuste conforme necessário para telas pequenas
  }
  // Estilos para a barra de busca
`

export const AuthLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

& .login {
font-size: 12px;
color: #ffffff;
}
  // Estilos para os links de autenticação (login e cadastro)
`

export const Section = styled.section`
height: 415px;
`
export const Main = styled.main`
background-color: purple;
height: 100vh;
`

export const Footer = styled.footer`
background-color: darkslategray;
height: 200px;
`
