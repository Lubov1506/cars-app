import Container from "../Container/Container";
import s from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <header className={s.header}>
      <Container>{children}</Container>
    </header>
  );
};

export default Header;
