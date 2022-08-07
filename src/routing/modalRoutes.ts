import { lazy } from "react";

const BetData = lazy(() =>(import("pages/BetData").then(module=>({default:module.BetData}))));

export interface PropsType {
    [key: string]: any;
  }
  export type ModalNames = "bet-data";
  export interface ModalSearch {
    name: string;
    value: ModalNames;
  }
export interface ModalsProps {
    isOpen: boolean;
    modalName: ModalNames | string;
    code: string;
    props: PropsType;
    gameName: any;
  }
export interface ModalRouteType {
    path?: string;
    modalSearch?: ModalSearch;
    isAuthorizedOnly?: boolean;
    isPrivate?: boolean;
    Component: React.FunctionComponent<ModalsProps>;
  }
export const modalRoutes: ModalRouteType[] = [


    {
      modalSearch: { name: "page", value: "bet-data" },
      isAuthorizedOnly: false,
      Component: BetData,
    },

  ];
  export type ParamKeys = keyof IModalParams;
  export type IModalParams = {
    "bet-data": {
      id: string;
      userName: string;
    };
  };
  export const ModalParams: IModalParams = {
    "bet-data": {
      id: "id",
      userName: "userName",
    },
  };
  export const isAuthorizedOnlyModalList: { [key in ParamKeys]: boolean } = {

    "bet-data": false,

  };