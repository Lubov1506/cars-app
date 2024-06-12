import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCarsThunk, fetchCarsPagThunk } from "../../redux/cars/operations";
import Button from "../Button/Button";
import s from "./CarsList.module.css";
import {
  selectCars,
  selectTotalPage,
} from "../../redux/cars/selectors";
import CarsItem from "../CarsItem/CarsItem";
import Container from "../Container/Container";

const CarsList = () => {
  const cars = useSelector(selectCars);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const totalPage = useSelector(selectTotalPage);

  useEffect(() => {
    dispatch(fetchAllCarsThunk());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCarsPagThunk({ page }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };
  return (
    <Container>
      {cars.length ? (
        <ul className={s.list}>
          {cars.map((car) => {
            return <CarsItem key={car.id} item={car} />;
          })}
        </ul>
      ) : null}

      {page < totalPage && (
        <Button className={s.load_btn} onClick={() => handleLoadMore()}>
          Load more
        </Button>
      )}
    </Container>
  );
};

export default CarsList;
