import React, { FC } from "react";

const Split: FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="22"
      height="17"
      viewBox="0 0 22 17"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.82617 13.5623L6.625 14.3736L1 4.63086L7.28734 1.00086L10.0998 5.87225"
        stroke="#218DC9"
        stroke-linejoin="round"
      />
      <rect
        x="14.3777"
        y="1.38481"
        width="8.26"
        height="12.25"
        transform="rotate(27.869 14.3777 1.38481)"
        stroke="#218DC9"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Split;
