import Container from "../../components/Container/Container";
import s from "./Home.module.css";
const Home = () => {
  return (
    <Container>
      <div className={s.home}>
        <div className={s.slogo}>
          <h1>
            Rent Easy <br /> Drive Happy
          </h1>
        </div>
      </div>{" "}
    </Container>
  );
};

export default Home;
