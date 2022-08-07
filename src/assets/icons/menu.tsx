import React, { FC } from "react";

const Menu: FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="34"
      height="23"
      viewBox="0 0 34 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <rect width="34" height="3" rx="1.5" fill="#34E7FF" />
      <rect y="10" width="34" height="3" rx="1.5" fill="#34E7FF" />
      <rect y="20" width="34" height="3" rx="1.5" fill="#34E7FF" />
    </svg>
  );
};

export default Menu;
