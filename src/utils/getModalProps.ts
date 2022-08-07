import * as H from "history";
import { ModalRouteType, ModalsProps } from "routing/modalRoutes";

interface GetModalsProps extends Omit<ModalRouteType, "Component"> {
  location: H.Location<unknown>;
}

export const getModalsProps = ({
  path,
  modalSearch,
  location,
}: GetModalsProps): Omit<ModalsProps, "gameName"> => {
  let isOpen = false;
  let modalName = "";
  const params: URLSearchParams = new URLSearchParams(location.search);
  let code = params.get("code") || "";
  const paths = location.pathname.split("/").filter((v) => v);
  if (path) {
    if (path === location.pathname) {
      isOpen = true;
    }
  }

  if (modalSearch) {
    const { name, value } = modalSearch;
    let isModal = false;
    if (typeof value === "string") {
      isModal = paths.includes(name);
    }
    if (isModal && paths.includes(value)) {
      modalName = value;
      isOpen = true;
    }
  }




  return {
    isOpen,
    modalName,
    code,
    props: {},
  };
};
