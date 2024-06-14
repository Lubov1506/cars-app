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

  useEffect(() => {
    dispatch(fetchAllCarsThunk({ query }));
  }, [dispatch, query]);

  useEffect(() => {
    if (currentPage === 1) {
      dispatch(fetchSearchCarsThunk({ query, page: 1 }));
    } else {
      dispatch(fetchSearchCarsThunk({ query, page: currentPage }));
    }
  }, [dispatch, query, currentPage]);

  const handleSubmit = (values) => {
    dispatch(resetCars());
    dispatch(setQuery(values));
    dispatch(setCurrentPage(1));
  };

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= totalPage) {
      dispatch(setCurrentPage(nextPage));
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
