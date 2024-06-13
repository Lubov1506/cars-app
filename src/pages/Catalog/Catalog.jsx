import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import CarsList from "../../components/CarsList/CarsList";
import Container from "../../components/Container/Container";
import {
  fetchAllCarsThunk,
  fetchSearchCarsThunk,
} from "../../redux/cars/operations";
import { resetCars, setCurrentPage, setQuery } from "../../redux/cars/slice";
import s from "./Catalog.module.css";
import {
  selectCars,
  selectCurrerntPage,
  selectQuery,
  selectTotalPage,
} from "../../redux/cars/selectors";
import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
const Catalog = () => {
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrerntPage);

  const query = useSelector(selectQuery);

  const dispatch = useDispatch();
  const totalPage = useSelector(selectTotalPage);
console.log(currentPage, totalPage);
  useEffect(() => {
    dispatch(fetchAllCarsThunk({ query }));
  }, [dispatch, query]);

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(fetchSearchCarsThunk({ query }));
    }
  }, [dispatch, query, cars]);

  const handleSubmit = (values) => {
    dispatch(resetCars());
    dispatch(setQuery(values));
    dispatch(setCurrentPage(1));
    dispatch(fetchSearchCarsThunk({ query: values, page: 1 }));
  };
  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPage) {
      dispatch(setCurrentPage(nextPage));
      dispatch(fetchSearchCarsThunk({ query, page: nextPage }));
    }
  };

  return (
    <Container className={s.container}>
      <SearchBar onSubmit={handleSubmit} query={query} />
      {cars.length > 0 ? <CarsList cars={cars} /> : null}
      {currentPage < totalPage && cars.length && (
        <Button className={s.load_btn} onClick={() => handleLoadMore()}>
          Load more
        </Button>
      )}
    </Container>
  );
};

export default Catalog;
