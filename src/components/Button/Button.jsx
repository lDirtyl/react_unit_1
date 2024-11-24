import css from "./Button.module.css";
import clsx from "clsx";

const Button = ({ children, variant, size }) => {
  return (
    <button
      className={clsx(
        css.btn,
        css.md,
        variant === "secondary" && css.primary,
        size === "lg" && css.lg
      )}
    >
      {children}
    </button>
  );
};

export default Button;
