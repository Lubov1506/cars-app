import clsx from "clsx";
import s from './Button.module.css'

const Button = (props) => {
  return <button {...props} className={clsx(s.btn, props.className)} />;
};

export default Button;
