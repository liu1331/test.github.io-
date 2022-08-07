import React, { useRef, FunctionComponent, MouseEventHandler } from "react";
import { FacebookShareButton, TwitterShareButton } from "react-share";

import facebookIcon from "assets/icons/facebook-white.svg";
import twitterIcon from "assets/icons/twitter-white.svg";

import css from "./style.module.scss";

interface Props {
  handleCopyToBuffer: (
    props: any,
    ref: React.RefObject<HTMLInputElement> | null
  ) => void;
  onClose: () => void;
  shareLink: string;
  shareTitle: string;
}

export const Share: FunctionComponent<Props> = ({
  handleCopyToBuffer,
  onClose,
  shareLink,
  shareTitle,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={css.root}>
      <div className={css.socialContainer}>
        <div className={css.social}>
          <FacebookShareButton url={shareLink} quote={shareTitle}>
            <img className={css.iconBox} src={facebookIcon} />
          </FacebookShareButton>
          <span>Facebook</span>
        </div>
        <div className={css.social}>
          <TwitterShareButton title={shareTitle} url={shareLink}>
            <img className={css.iconBox} src={twitterIcon} />
          </TwitterShareButton>
          <span>Twitter</span>
        </div>
      </div>
      <div className={css.line} />
      <div className={css.buttonWrapper}>
        <button onClick={onClose} className={css.button}>
          cancel
        </button>
      </div>
    </div>
  );
};
