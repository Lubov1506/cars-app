import { formatPrice } from "../../helpers/formatPrice";
import { formatRentalConditions } from "../../helpers/formatRentalConditions";
import { prettyBalanceFormat } from "../../helpers/prettyBalanceFormat";
import { defaultCar } from "../../images/defaultCarImg";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import s from "./CarModal.module.css";
const CarModal = ({ onClose, item }) => {
  const {
    img,
    make,
    model,
    description,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = item;
  const [streetAddress, city, country] = address.split(",");
  const formatType = `${type.slice(0, 1).toUpperCase()}${type
    .slice(1)
    .toLowerCase()}`;

  const rentalCondFormat = formatRentalConditions(rentalConditions);

  return (
    <Modal onClose={onClose} className={s.modal}>
      <section className={s.main_info}>
        <div className={s.img_wrapper}>
          <img src={img ? img : defaultCar} alt={make} />
        </div>
        <div>
          <h2>
            {make} <span className={s.blue_accent}>{model}</span>, {year}
          </h2>
          <ul className={s.gap_list}>
            <li>{city}</li>
            <li>{country}</li>
            <li>Id: {id}</li>
            <li>Year: {year}</li>
            <li>Type: {formatType}</li>
          </ul>
          <ul className={s.gap_list}>
            <li>Fuel Consumption: {fuelConsumption}</li>
            <li>Engine Size: {engineSize}</li>
          </ul>
        </div>
        <p>{description}</p>
      </section>

      <section className={s.acc_func}>
        <h3>Accessories and functionalities:</h3>
        <ul className={s.gap_list}>
          {accessories.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
        <ul className={s.gap_list}>
          {functionalities.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </section>
      <section className={s.rent_cond}>
        <h3>Rental Conditions:</h3>
        <ul className={s.cond_list}>
          {rentalCondFormat.map((item, idx) => {
            if (typeof item === "object") {
              const { key, value } = item;
              return (
                <li key={idx}>
                  {key}: <span className={s.blue_accent}>{value}</span>
                </li>
              );
            } else {
              return <li key={idx}>{item}</li>;
            }
          })}
          <li>
            Mileage: <span className={s.blue_accent}>{prettyBalanceFormat(mileage)}</span>
          </li>
          <li>
            Price: <span className={s.blue_accent}>{formatPrice(rentalPrice)}$</span>
          </li>
        </ul>
      </section>
      <a href="tel:+380730000000" className={s.btn_rental}>Rental car</a>
    </Modal>
  );
};

export default CarModal;
