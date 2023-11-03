import { Outlet, useLocation } from "react-router-dom";
// import Footer from "../components/Footer/Footer";
import Header from "../modules/header/Header";
import Stats from "../modules/mainPage/components/Stats/Stats";
import { Container } from "./LayoutStyled";

const Layout = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";

  return (
    <>
    <Container hasbackground={isMainPage ? "true" : "false"}>
      <Header />
      <Outlet />
    </Container>
    {isMainPage && <Stats/>}
    {/* <Footer /> */}
    </>
  );
}

export default Layout;
