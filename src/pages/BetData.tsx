import React, {
  FunctionComponent,
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
} from "react";
import { useHistory, useLocation } from "react-router-dom";
import clsx from "clsx";

import loseImg from "assets/icons/lose-icon.png";
import winImg from "assets/icons/win-icon.png";
import { Share } from "components/Share";
import { ModalsProps } from "routing/modalRoutes";
import { useModalLocation } from "hooks/useModalLocation";
import html2canvas from "html2canvas";
import { Helmet } from "react-helmet";
import { Modal } from "antd";

import css from "./style.module.scss";

const gameLocations: any = {
  dice: "hash-dice",
  videopoker: "video-poker",
  blackjack: "blackjack",
};

const mobileScreen = 600;

export const BetData: FunctionComponent<ModalsProps> = ({ isOpen }) => {
  console.log(isOpen);

  const location = useLocation();

  const {
    params: { id, userName },
    close,
    pushHistoryTo,
  } = useModalLocation("bet-data");

  const [isShareOpen, setIsShareOpen] = useState(false);
  const gameContentRef = useRef<HTMLDivElement | null>(null);
  // const [image, takeScreenShot] = useState("");
  const [image, takeScreenShot] = useState<any>();
  const [coinImg, setCoinImg] = useState(false);

  // const [image, takeScreenShot] = useScreenshot();

  const getImage = useCallback(() => {
    if (gameContentRef.current && coinImg) {
      const imgs = gameContentRef.current.querySelectorAll("img");
      // imgs.forEach((img) => {
      //   img.crossOrigin = "anonymous";
      // });
      // try {
      //   htmlToImage
      //     .toJpeg(gameContentRef.current, {
      //       cacheBust: true,
      //       backgroundColor: "transparent",
      //     })
      //     .then((dataUrl) => {
      //       if (gameContentRef.current)
      //         htmlToImage
      //           .toPng(gameContentRef.current, { cacheBust: true })
      //           .then((dataUrl1) => {
      //             takeScreenShot(dataUrl1);
      //           });
      //     });
      // } catch (error) {
      //   console.log(error);
      // }
      html2canvas(gameContentRef.current, {
        backgroundColor: null,
        useCORS: true,
      }).then((canvas) => {
        try {
          takeScreenShot(canvas.toDataURL());
        } catch (error) {
          console.log(error);
        }
      });
    }
  }, [coinImg]);

  const path = window.location.pathname + window.location.search;

  return (
    <>
      <Helmet defer={false} onChangeClientState={(state) => console.log(state)}>
        <meta property="og:title" content="European Travel Destinations" />
        <meta
          property="og:image"
          content="http://euro-travel-example.com/thumbnail.jpg"
        />
        <meta property="og:url" content={path} />
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          property="og:description"
          content="Offering tour packages for individuals or groups."
        />
        <meta name="twitter:image:alt" content={winImg} />
      </Helmet>

      <Modal
        title="Заказ"
        visible={isOpen}
        onOk={() => {}}
        okText="Добавить в корзину"
        cancelText="Отмена"
        onCancel={() => close()}
      >
        {/* <div ref={gameContentRef}> */}
        <div className={css.box}>
          {image && (
            <div className={css.shareImgWrapper}>
              <img src={image} className={css.shareImg}></img>
            </div>
          )}
        </div>
        {/* </div> */}
      </Modal>
    </>
  );
};
