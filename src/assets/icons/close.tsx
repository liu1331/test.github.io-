import React, { FC } from "react";

const Close: FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <title>Close</title>
      <g
        id="UI"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        opacity="0.5"
        stroke-linecap="round"
        stroke-linejoin="round">
        <g
          id="modal-login"
          transform="translate(-429.000000, -43.000000)"
          stroke="#FFFFFF"
          stroke-width="2">
          <g id="pop">
            <g id="close" transform="translate(430.000000, 44.000000)">
              <path
                d="M-3.37507799e-14,21.2132034 L21.2132034,0"
                id="Line-2"></path>
              <path
                d="M-3.37507799e-14,21.2132034 L21.2132034,0"
                id="Line-2-Copy"
                transform="translate(10.606602, 10.606602) scale(-1, 1) translate(-10.606602, -10.606602) "></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Close;
