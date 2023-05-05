import React, { FC, DOMAttributes, HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./Paragraph.module.css";
interface Props
  extends HTMLAttributes<HTMLElement>,
    DOMAttributes<HTMLElement> {
  centered?: boolean;
  variant?: "styled" | "default";
}

export const Paragraph: FC<Props> = ({
  children,
  centered,
  className = "",
  variant = "styled",
  ...props
}) => {
  const classes = classNames(styles.root, className, {
    [styles.centered]: centered,
  });

  const lineClasses = classNames({
    "mb-4": variant === "styled",
  });

  if (typeof children === "string" && children.includes("\n")) {
    const lines = children.split("\n");
    return (
      <div {...props} className={classes}>
        {lines.map((line, key) => (
          <p key={key} className={lineClasses}>
            {line}
          </p>
        ))}
      </div>
    );
  }

  return (
    <p {...props} className={classes}>
      {children}
    </p>
  );
};
