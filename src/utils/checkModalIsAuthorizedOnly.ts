import { ParamKeys } from "routing/modalRoutes";

export const checkModalIsAuthorizedOnly = async (
  modalName: ParamKeys | undefined,
) => {
  let isAuthorizedOnly = false;
  let token: string | null = null;
  try {
    token = localStorage.getItem("token");
  } catch (error) {
   console.log(error);

  }
  const list = await import("routing/modalRoutes").then(
    (obj) => obj.isAuthorizedOnlyModalList,
  );
  if (modalName) {
    isAuthorizedOnly = list[modalName];
  }

  return token ? isAuthorizedOnly && !token : isAuthorizedOnly;
};
