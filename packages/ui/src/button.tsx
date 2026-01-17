"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  appName: string;
}

export const Button = ({
  children,
  onClick: onClickProp,
  className,
  appName,
}: ButtonProps) => {
  const onClick = () => {
    if (typeof onClickProp === "function") {
      onClickProp();
      return;
    }

    alert(`Hello from your ${appName} app!`);
  };

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
