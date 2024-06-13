import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import s from "./Layout.module.css";


const Layout = () => {
  return (
    <div className={s.layout}>
      <Header>
        <Navigation />
      </Header>

        <Outlet />
    </div>
  );
};

export default Layout;
