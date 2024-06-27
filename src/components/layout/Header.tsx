import React from 'react'
import { StyledHeader } from '../../styles/styled-components/layout/HeaderStyles'
import { NavMenu, Logo, SearchInput, AuthLinks } from '../../styles/styled-components/header'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <NavMenu>Menu</NavMenu>
      <Logo>Logo Aqui</Logo>
      <SearchInput type='text' placeholder='Busque aqui' />
      <AuthLinks>
        <div className='login'>
          faça <strong>LOGIN</strong> ou
        </div>
        <div>Cadastro</div>
      </AuthLinks>
    </StyledHeader>
  )
}

export default Header
