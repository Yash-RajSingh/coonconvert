import { LayoutContainer } from './LayoutElements'
import Header from '../Header/Header'
interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
    <Header />
    <LayoutContainer>
      {children}
    </LayoutContainer>
    </>
  )
}

export default Layout

