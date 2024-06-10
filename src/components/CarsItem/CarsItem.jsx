import Button from "../Button/Button";
import s from "./CarsItem.module.css";
const CarsItem = ({
  item: {
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
  },
}) => {
  const defaultCar =
    "https://static.vecteezy.com/system/resources/previews/019/879/187/non_2x/car-monochrome-icon-on-transparent-background-free-png.png";

  const MAX_LENGTH_NAME = 13;
  const carName = make + " " + model;
  const [streetAddress, city, country] = address.split(",");
  const [functionality] = functionalities;

  const formatType = `${type.slice(0, 1).toUpperCase()}${type
    .slice(1)
    .toLowerCase()}`;
  const topInfo = [city, country, rentalCompany];
  const botInfo = [formatType, model, id, functionality];

  return (
    <li className={s.card}>
      <div className={s.img_wrap}>
        <img
          src={img ?? defaultCar}
          className={!img ? s.default_img : undefined}
          alt={make}
        />
      </div>
      <div className={s.desc}>
        <div className={s.heading}>
          {carName.length < 13 ? (
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
          <p>{topInfo.join(" | ")}</p>
          <p>{botInfo.join(" | ")}</p>
        </div>
      </div>
      <Button className={s.card_btn}>Learn more</Button>
    </li>
  );
};

export default CarsItem;
