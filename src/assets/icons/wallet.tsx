import React, { FC } from "react";

const Wallet: FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="34px"
      height="30px"
      viewBox="0 0 34 30"
      version="1.1"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <title>Wallet</title>
      <g id="UI" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g
          id="Header-States"
          transform="translate(-1284.000000, -31.000000)"
          stroke="#B78FFF"
          stroke-width="1.5">
          <g id="header" transform="translate(31.000000, 24.000000)">
            <g id="Group-9" transform="translate(1254.000000, 6.000000)">
              <g id="wallet" transform="translate(0.000000, 2.000000)">
                <path
                  d="M0,10 L0,4 C0,1.790861 1.75504378,0 3.92,0 L24.08,0 C26.2449562,0 28,1.790861 28,4 C28,6.66666667 28,8.66666667 28,10"
                  id="Path"></path>
                <path
                  d="M28,19.9058442 L28,24 C28,26.1965871 26.1649562,28 24,28 L6,28 C2.75256567,28 0,25.2948806 0,22 L0,8 C0,5.80341293 0,5 0,4 C0,3 0,4 1,4 C1.66666667,4 9.33333333,4 24,4 C26.1649562,4 27.92,5.78068565 27.92,7.97727273 L28,9.96266234"
                  id="Path"></path>
                <path
                  d="M24.2857143,10.1428571 L29.2857143,10.1428571 C30.3902838,10.1428571 31.2857143,11.0382876 31.2857143,12.1428571 L31.2857143,18.1428571 C31.2857143,19.2474266 30.3902838,20.1428571 29.2857143,20.1428571 L24.2857143,20.1428571 C21.5242905,20.1428571 19.2857143,17.9042809 19.2857143,15.1428571 C19.2857143,12.3814334 21.5242905,10.1428571 24.2857143,10.1428571 Z"
                  id="Rectangle-Copy-16"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Wallet;
