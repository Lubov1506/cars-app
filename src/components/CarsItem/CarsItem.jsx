import Button from "../Button/Button";
import { GrFavorite } from "react-icons/gr";
import { MdOutlineFavorite } from "react-icons/md";
import s from "./CarsItem.module.css";
import { toggleFavorite } from "../../redux/cars/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectFavoritesId } from "../../redux/cars/selectors";

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
  const defaultCar =
    "https://static.vecteezy.com/system/resources/previews/019/879/187/non_2x/car-monochrome-icon-on-transparent-background-free-png.png";

  const MAX_LENGTH_NAME = 13;
  const carName = make + " " + model;
  const [streetAddress, city, country] = address.split(",");
  const [functionality] = functionalities;

  const formatType = `${type.slice(0, 1).toUpperCase()}${type
    .slice(1)
    .toLowerCase()}`;
  const isFavorite = favoritesId.find((carId) => carId === item.id);
  console.log(isFavorite);
  return (
    <li className={s.card}>
      <button className={s.icon} onClick={() => dispatch(toggleFavorite(item))}>
        {isFavorite ? (
          <MdOutlineFavorite className={s.liked_icon} />
        ) : (
          <GrFavorite width={16} height={16} />
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
  );
};

export default CarsItem;
