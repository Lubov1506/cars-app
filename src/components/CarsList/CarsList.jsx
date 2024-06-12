import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllCarsThunk,
  fetchCarsPagThunk,
} from "../../redux/cars/operations";
import Button from "../Button/Button";
import s from "./CarsList.module.css";
import {
  selectCars,
  selectCurrerntPage,
  selectTotalPage,
} from "../../redux/cars/selectors";
import CarsItem from "../CarsItem/CarsItem";
import Container from "../Container/Container";
import { setCurrentPage } from "../../redux/cars/slice";

const CarsList = () => {
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrerntPage);
  const dispatch = useDispatch();
  const totalPage = useSelector(selectTotalPage);

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(fetchCarsPagThunk({ page: 1 }));
    }
  }, [dispatch, cars.length]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPage) {
      dispatch(setCurrentPage(nextPage));
      dispatch(fetchCarsPagThunk({ page: nextPage }));
    }
  };
  console.log(cars, totalPage);
  return (
    <Container className={s.container}>
      {cars.length ? (
        <ul className={s.list}>
          {cars.map((car) => {
            return <CarsItem key={car.id} item={car} />;
          })}
        </ul>
      ) : null}

      {currentPage < totalPage && cars.length && (
        <Button className={s.load_btn} onClick={() => handleLoadMore()}>
          Load more
        </Button>
      )}
    </Container>
  );
};

export default CarsList;
