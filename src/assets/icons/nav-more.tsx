import React, { FC } from "react";

const NavMore: FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="32px"
      height="6px"
      viewBox="0 0 32 6"
      version="1.1"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <title>More</title>
      <g
        id="Mobile"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd">
        <g
          id="01-home"
          transform="translate(-348.000000, -971.000000)"
          fill="#B78FFF">
          <g id="navbar" transform="translate(0.000000, 928.000000)">
            <g id="Group-11">
              <g>
                <g transform="translate(348.000000, 43.000000)">
                  <circle id="Oval" cx="3" cy="3" r="3"></circle>
                  <circle id="Oval-Copy" cx="16" cy="3" r="3"></circle>
                  <circle id="Oval-Copy-3" cx="29" cy="3" r="3"></circle>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default NavMore;
