import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import s from "./Layout.module.css";
import Container from "../Container/Container";

const Layout = () => {
  return (
    <div className={s.layout}>
      <Header>
        <Navigation />
      </Header>

      <Container className={ s.outlet}>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
