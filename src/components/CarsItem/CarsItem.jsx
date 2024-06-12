import Button from "../Button/Button";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import s from "./CarsItem.module.css";
import { toggleFavorite } from "../../redux/cars/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoritesId } from "../../redux/cars/selectors";
import { useState } from "react";
import CarModal from "../CarModal/CarModal";
import { defaultCar } from "../../images/defaultCarImg";

const CarsItem = ({ item }) => {
  const {
    address,
    functionalities,
    img,
    make,
    model,
    year,
    rentalCompany,
    rentalPrice,
    type,
    id,
  } = item;
  const dispatch = useDispatch();
  const favoritesId = useSelector(selectFavoritesId);

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const MAX_LENGTH_NAME = 13;
  const carName = make + " " + model;
  const [streetAddress, city, country] = address.split(",");
  const [functionality] = functionalities;

  const formatType = `${type.slice(0, 1).toUpperCase()}${type
    .slice(1)
    .toLowerCase()}`;
  const isFavorite = favoritesId.find((carId) => carId === item.id);
  console.log(isFavorite);

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    dispatch(toggleFavorite(item));
  };
  return (
    <>
      <li className={s.card} onClick={() => openModal()}>
        <button
          className={s.icon}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? (
            <MdOutlineFavorite size={20} className={s.liked_icon} />
          ) : (
            <GrFavorite size={20} />
          )}
        </button>
        <div className={s.img_wrap}>
          <img
            src={img ?? defaultCar}
            className={!img ? s.default_img : undefined}
            alt={make}
          />
        </div>
        <div className={s.desc}>
          <div className={s.heading}>
            {carName.length < MAX_LENGTH_NAME ? (
              <p>
                {make} <span className={s.accent_blue}>{model}</span>, {year}
              </p>
            ) : (
              <p>
                {make}, {year}
              </p>
            )}
            <p>{rentalPrice}</p>
          </div>
          <div className={s.bottom}>
            <ul>
              <li>{city}</li>
              <li>{country}</li>
              <li>{rentalCompany}</li>
            </ul>

            <ul className={s.bot_info}>
              <li>{formatType}</li>
              <li>{model}</li>
              <li>{id}</li>
              <li>{functionality}</li>
            </ul>
          </div>
        </div>
        <Button className={s.card_btn}>Learn more</Button>
      </li>
      {isOpen && <CarModal onClose={closeModal} item={item} />}
    </>
  );
};

export default CarsItem;
