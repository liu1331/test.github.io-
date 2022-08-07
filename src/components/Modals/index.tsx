import React, {
  FC,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Route, useHistory } from "react-router-dom";
import { ModalParams, modalRoutes } from "routing/modalRoutes";
import { getModalsProps } from "utils/getModalProps";
import { whenDocumentReady } from "utils/whenDocumentReady";

interface Props {
  isOpen: boolean;
  background: any;
  location: any;
}

const Modals: FC<Props> = ({ isOpen, background, location }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { push } = useHistory();
  console.log(location);
  return (
    <>
      {modalRoutes.map(({ Component, ...other }, i) => {
        const { modalSearch, path } = other;

        let params = {};
        let pathValue = [];
        if (path) {
          pathValue.push(path);
        }
        if (modalSearch) {
          params = ModalParams[modalSearch?.value];
          pathValue[0] = `/${modalSearch?.name}/${modalSearch?.value}`;
        }
        if (Object.keys(params).length) {
          pathValue[1] =
            `/${modalSearch?.name}/${modalSearch?.value}/:` +
            Object.values(params).join("/:");
        }
        const props = getModalsProps({
          ...other,
          location,
        });

        return (
          <Route
            path={pathValue}
            exact
            children={
              <Suspense fallback={null}>
                {props.isOpen ? (
                  <Component
                    gameName={""}
                    key={`@customModals/${i}`}
                    {...props}
                  />
                ) : null}
              </Suspense>
            }
          ></Route>
        );
      })}
    </>
  );
};

export default Modals;
