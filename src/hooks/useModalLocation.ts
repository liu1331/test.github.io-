import React from "react";

import { useHistory, useLocation, useParams } from "react-router-dom";
import { IModalParams, ModalParams, ParamKeys } from "routing/modalRoutes";
import { checkModalIsAuthorizedOnly } from "utils/checkModalIsAuthorizedOnly";

interface SearchValue<T> {
  name: string;
  value: T;
}
export interface IPushHistoryTo {
  path?: string;
  search?: SearchValue<ParamKeys>;
  searchParams?: Record<string, string>;
  locationState?: unknown;
}
export const getModalPath = ({
  path,
  search,
  searchParams,
}: Omit<IPushHistoryTo, "locationState">) => {
  let pushValue = "";
  if (path) {
    pushValue = path;
  }
  if (search) {
    pushValue = `/${search.name}/${search.value}`;
  }
  if (searchParams) {
    for (let key in searchParams) {
      pushValue += `/${searchParams[key]}`;
    }
  }
  return pushValue;
};

export function useModalLocation<T extends ParamKeys>(
  modalName = "login" as T,
): {
  params: IModalParams[T];
  back: (e?: Event) => void;
  close: (e?: Event) => void;
  pushHistoryTo: (props: IPushHistoryTo) => void;
  location: any;
} {
  const params = useParams<typeof ModalParams[typeof modalName]>();
  const location: any = useLocation();

  const { push, goBack, replace } = useHistory();

  const back = (e?: Event) => {
    if (e) {
      e.stopPropagation();
    }
    goBack();
  };
  const close = (e?: Event) => {
    if (e) {
      e.stopPropagation();
    }
    if (location.state && location.state.background) {
      replace({ ...location.state.background });
    } else {
      push(`/`, undefined);
    }
  };
  const pushHistoryTo = async (props: IPushHistoryTo = {}) => {
    if (await checkModalIsAuthorizedOnly(modalName)) return;
    let background =
      location.state && location.state.background
        ? location.state.background
        : location;
    if (background.pathname.split("/").includes("page")) {
      background = { hash: "", pathname: "/", search: "", state: undefined };
    }
    replace(
      getModalPath({ search: { name: "page", value: modalName }, ...props }),
      {
        background: props.locationState || background,
      },
    );
  };

  return {
    params,
    back,
    close,
    pushHistoryTo,
    location: location.state?.background || location,
  };
}
