import Footer from '../modules/footer/footer'
import Header from '../modules/header/header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout
