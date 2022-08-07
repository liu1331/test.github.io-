import React, { FC } from "react";

const ArrowRight: FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="35"
      height="32"
      viewBox="0 0 35 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M17.4903 15.1663L13.5542 11.5694L14.6786 10.542L19.7391 15.1663L14.6786 19.7905L13.5542 18.7631L17.4903 15.1663Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowRight;
