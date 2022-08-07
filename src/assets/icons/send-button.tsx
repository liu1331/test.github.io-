import React, { FC } from "react";

const SendButton: FC<React.SVGProps<SVGSVGElement>> = ({ ...props }) => {
  return (
    <svg
      width="21px"
      height="18px"
      viewBox="0 0 21 18"
      version="1.1"
      {...props}
      xmlns="http://www.w3.org/2000/svg">
      <title>send-button</title>
      <desc>Created with Sketch.</desc>
      <g id="UI" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g
          id="02-game-01-crash"
          transform="translate(-1388.000000, -1414.000000)"
          fill="#2D0273"
          fill-rule="nonzero">
          <g id="chat-input" transform="translate(1143.000000, 1403.000000)">
            <g id="Group-6" transform="translate(245.000000, 11.000000)">
              <g id="send-button">
                <polygon
                  id="Path"
                  points="0 18 21 9 0 0 0 7 10 9 0 11"></polygon>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default SendButton;
