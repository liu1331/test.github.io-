import React, { FC } from "react";

const NavChat: FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="34px"
      height="33px"
      viewBox="0 0 34 33"
      version="1.1"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <title>Chat</title>
      <g
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linejoin="round">
        <g
          transform="translate(-35.000000, -959.000000)"
          stroke="#B78FFF"
          stroke-width="2">
          <g transform="translate(0.000000, 928.000000)">
            <g>
              <g>
                <g transform="translate(35.000000, 20.000000)">
                  <g transform="translate(1.000000, 12.000000)">
                    <path d="M24.32,24.32 L24.32,30.72 L17.28,24.32 L4,24.32 C1.790861,24.32 2.705415e-16,22.529139 0,20.32 L0,4 C-2.705415e-16,1.790861 1.790861,4.05812251e-16 4,0 L28,0 C30.209139,-4.05812251e-16 32,1.790861 32,4 L32,20.32 C32,22.529139 30.209139,24.32 28,24.32 L24.32,24.32 Z"></path>
                    <path d="M7,9 L25,9" stroke-linecap="round"></path>
                    <path d="M7,14 L18,14" stroke-linecap="round"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default NavChat;
