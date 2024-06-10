import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarsThunk } from "../../redux/cars/operations";
import Button from "../Button/Button";
import s from "./CarsList.module.css";
import { selectCars } from "../../redux/cars/selectors";
import CarsItem from "../CarsItem/CarsItem";
import Container from "../Container/Container";
const CarsList = () => {
  const cars = useSelector(selectCars);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);
console.log(cars);
  return (
    <Container>
      {cars.length ? (
        <ul className={s.list}>
          {cars.map((car) => {
            return <CarsItem key={`${car.id}${car.make}`} item={car} />;
          })}
        </ul>
      ) : null}
    </Container>
  );
};

export default CarsList;
