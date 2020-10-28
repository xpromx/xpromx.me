import React, { FC } from "react";
import { Spinner } from "@components/Spinner";

interface LoadingProps {
  className?: string;
}

export const Loading: FC<LoadingProps> = ({ children, className }) => {
  return (
    <>
      <div className="text-center">
        <Spinner className={className} />
      </div>
      {children}
    </>
  );
};
