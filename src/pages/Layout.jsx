import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import { Container } from "./LayoutStyled"
import Header from "../modules/mainPage/components/Header"

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  )
}

export default Layout