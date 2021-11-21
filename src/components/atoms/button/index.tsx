import * as React from "react";
import { HTMLProps, ReactNode, forwardRef } from "react";
import "./styles.css";

interface Props {
  type?: "primary" | "default" | "text" | "link" | "danger" | "link";
  size?: "large" | "default" | "small";
  danger?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  loading?: boolean;
  className?: string;
  btnType?: "submit" | "reset" | "button";
}
export const Button = forwardRef<
  HTMLButtonElement,
  Props & HTMLProps<HTMLButtonElement>
>(
  (
    {
      children,
      icon,
      type = "default",
      className = "",
      btnType = "button",
      size = "default",
      ...rest
    },
    ref
  ) => {
    if (type === "primary") {
      return (
        <button
          type={btnType}
          className={`btn btn-primary btn-size-${size} ${className}`}
          ref={ref}
          {...rest}
        >
          {icon && <span className={children ? "mr-2" : ""}>{icon}</span>}
          {children}
        </button>
      );
    }
    if (type === "text") {
      return (
        <button
          type={btnType}
          className={`btn btn-text btn-size-${size} ${className}`}
          ref={ref}
          {...rest}
        >
          {icon && <span className={children ? "mr-2" : ""}>{icon}</span>}
          {children}
        </button>
      );
    }

    if (type === "link") {
      return (
        <button
          type={btnType}
          className={`btn-link ${className}`}
          ref={ref}
          {...rest}
        >
          {icon && <span className={children ? "mr-2" : ""}>{icon}</span>}
          {children}
        </button>
      );
    }

    if (type === "danger") {
      return (
        <button
          type={btnType}
          className={`btn btn-danger btn-size-${size} ${className}`}
          ref={ref}
          {...rest}
        >
          {icon && <span className={children ? "mr-2" : ""}>{icon}</span>}
          {children}
        </button>
      );
    }

    return (
      <button
        type={btnType}
        className={`btn btn-default btn-size-${size} ${className}`}
        ref={ref}
        {...rest}
      >
        {icon && <span className={children ? "mr-2" : ""}>{icon}</span>}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button atom";
