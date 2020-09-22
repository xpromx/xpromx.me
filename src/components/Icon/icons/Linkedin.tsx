import React, { FC } from "react";

interface IconProps {
  className?: string;
}

export const Linkedin: FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="29"
      height="29"
      fill="none"
      viewBox="0 0 29 29"
    >
      <path
        fill="currentColor"
        d="M14.5 0C6.493 0 0 6.493 0 14.5S6.493 29 14.5 29 29 22.507 29 14.5 22.507 0 14.5 0zm-4.213 21.92H6.755V11.296h3.532V21.92zM8.52 9.845h-.023c-1.185 0-1.952-.816-1.952-1.835 0-1.043.79-1.836 1.998-1.836s1.952.793 1.975 1.836c0 1.02-.767 1.835-1.998 1.835zM23.02 21.92h-3.531v-5.684c0-1.428-.511-2.402-1.789-2.402-.976 0-1.556.657-1.812 1.291-.093.227-.116.544-.116.862v5.933h-3.531s.046-9.628 0-10.624h3.531V12.8c.47-.724 1.309-1.754 3.182-1.754 2.324 0 4.066 1.519 4.066 4.782v6.092z"
      ></path>
    </svg>
  );
};
