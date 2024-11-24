import clsx from "clsx";
import css from "./Title.module.css";

const Title = ({ children, variant, tag }) => {
  const classnames = clsx(
    css.title,
    variant === "primary" && css.primary,
    variant === "secondary" && css.secondary
  );
  return (
    <>
      {tag === "h1" ? (
        <h1 className={classnames}>{children}</h1>
      ) : tag === "h2" ? (
        <h2 className={classnames}>{children}</h2>
      ) : (
        <p className={classnames}>{children}</p>
      )}
    </>
  );
};

export default Title;
