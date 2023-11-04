import { Outlet, useLocation } from "react-router-dom";
// import Footer from "../components/Footer/Footer";
import Header from "../modules/header/Header";
import Stats from "../modules/mainPage/components/Stats/Stats";
import { Container } from "./LayoutStyled";

const Layout = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/";
  const isAuthRegisterPage = location.pathname === "/auth/registerForm";
  const isAuthLoginPage = location.pathname === "/auth/loginForm";

  return (
    <>
    <Container hasbackground={isMainPage || isAuthRegisterPage || isAuthLoginPage ? "true" : "false"}>
      <Header />
      <Outlet />
    </Container>
    {isMainPage && <Stats/>}
    {/* <Footer /> */}
    </>
  );
}

export default Layout;
