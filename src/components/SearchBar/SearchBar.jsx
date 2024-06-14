import { Form, Formik, Field } from "formik";
import { brandsFilterData, priceFilterData } from "../../assets/filterData";
import s from "./SearchBar.module.css";
import Select from "react-select";
import Button from "../Button/Button";
import { selectStyles } from "./selectStyles";
import { useSelector } from "react-redux";
import { selectQuery } from "../../redux/cars/selectors";
import { getOptionsForSelect } from "../../helpers/getOptionsForSelect";

const SearchBar = ({ onSubmit }) => {
  const query = useSelector(selectQuery);
  const brandOptions = getOptionsForSelect(brandsFilterData);
  brandOptions.push({ value: "", label: "All brands" });
  const priceOptions = getOptionsForSelect(priceFilterData);
  const initialValues = {
    make: "",
  };
  const defaultOption = brandOptions.find(
    (item) => item.value === query.make
  ) || { value: "", label: "All brands" };
  const handleSubmit = (values) => {
    onSubmit({ ...values });
  };

  return (
    <div className={s.search_bar}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form className={s.form}>
            <div className={s.search_block}>
              <span>Car brand</span>
              <Field name="make">
                {({ field, form }) => (
                  <Select
                    defaultValue={defaultOption}
                    styles={selectStyles}
                    options={brandOptions}
                    name="make"
                    onChange={(option) =>
                      form.setFieldValue(field.name, option.value)
                    }
                    className={s.select}
                  />
                )}
              </Field>
            </div>
            <div className={s.search_block}>
              <span>Price/ 1 hour</span>
              <Field name="rentalPrice">
                {({ field, form }) => (
                  <Select
                    defaultValue={{ value: "", label: "To $" }}
                    styles={selectStyles}
                    options={priceOptions}
                    name="rentalPrice"
                    onChange={(option) =>
                      form.setFieldValue(field.name, option.value)
                    }
                    className={s.select}
                  />
                )}
              </Field>
            </div>
            <Button type="submit" className={s.btn_search}>
              Search
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchBar;
