import clsx from "clsx";
import css from "./Title.module.css";
import { ImAirplane } from "react-icons/im";

const Title = ({ children, variant, tag }) => {
  const classnames = clsx(
    css.title,
    variant === "primary" && css.primary,
    variant === "secondary" && css.secondary
  );
  return (
    <>
      {tag === "h1" ? (
        <h1 className={classnames}>
          {children} <ImAirplane className={css.icon} />
        </h1>
      ) : tag === "h2" ? (
        <h2 className={classnames}>
          {children} <ImAirplane className={css.icon} />
        </h2>
      ) : (
        <p className={classnames}>
          {children} <ImAirplane className={css.icon} />
        </p>
      )}
    </>
  );
};

export default Title;
