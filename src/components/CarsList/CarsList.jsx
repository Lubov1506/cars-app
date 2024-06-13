import s from "./CarsList.module.css";
import CarsItem from "../CarsItem/CarsItem";

const CarsList = ({ cars = [] }) => {
  return (
    <>
      {cars.length ? (
        <ul className={s.list}>
          {cars.map((car) => {
            return <CarsItem key={car.id} item={car} />;
          })}
        </ul>
      ) : null}
    </>
  );
};

export default CarsList;
