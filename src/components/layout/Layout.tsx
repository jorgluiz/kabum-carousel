import React from 'react'
import { StyledLayout } from '../../styles/styled-components/layout/LayoutStyles'

import Header from './Header'
import Section from './Section'
import Main from './Main'
import Footer from './Footer'

const Layout: React.FC = () => {
  return (
    <StyledLayout>
      <div style={{ width: '1568px' }}>
        <Header />
        <Section />
        <Main />
        <Footer />
      </div>
    </StyledLayout>
  )
}

export default Layout
