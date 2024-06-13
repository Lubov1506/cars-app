import { Form, Formik, Field } from "formik";
import { filterDats } from "../../assets/filterData";
import s from "./SearchBar.module.css";
import Select from "react-select";
import Button from "../Button/Button";
import { brandSelectStyles } from "./brandSelectStyles";
import { useSelector } from "react-redux";
import { selectQuery } from "../../redux/cars/selectors";

const SearchBar = ({ onSubmit }) => {
  const query = useSelector(selectQuery);
  const brandOptions = filterDats.map((item) => {
    return { value: item, label: item };
  });
  brandOptions.push({ value: "", label: "All brands" });
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
                    styles={brandSelectStyles}
                    options={brandOptions}
                    name="make"
                    onChange={(option) =>
                      form.setFieldValue(field.name, option.value)
                    }
                    className={s.select}
                    placeholder="Select brand..."
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
