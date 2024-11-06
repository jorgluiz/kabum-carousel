import React, { useState, useEffect } from 'react'
import { StyledHeader } from '../../styles/styled-components/layout/HeaderStyles'
import { NavMenu, Logo, SearchInput, AuthLinks } from '../../styles/styled-components/header'

const Header: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Atualiza o estado para false logo após a montagem do componente
    setIsLoading(false)
  }, [])

  if (isLoading) return 



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
